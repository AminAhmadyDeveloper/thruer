import { os } from "@orpc/server";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import type { Permix } from "permix";
import { auth } from "@/server/auth";
import { type PermissionShape, permix } from "@/server/auth/permissions";
import { database } from "@/server/db";

interface BaseContext {
  database: typeof database;
}

export const base = os.use(async ({ next }) => {
  return await next<BaseContext>({
    context: {
      database: database,
    },
  });
});

interface AuthenticatedContext {
  auth: NonNullable<AuthenticationSession>;
  headers: NonNullable<Headers>;
}

export const authenticated = base
  .errors({
    INTERNAL_SERVER_ERROR: {
      message: "An internal server error occurred. Please try again later.",
    },
    UNAUTHORIZED: {
      message:
        "Authentication required. Please log in to access this resource.",
    },
  })
  .use(async ({ errors, next }) => {
    const headersStore = await headers();

    const authStore = await auth.api.getSession({
      headers: headersStore,
    });

    if (!authStore?.session) {
      throw errors.UNAUTHORIZED();
    }

    return await next<AuthenticatedContext>({
      context: {
        auth: authStore,
        headers: headersStore,
      },
    });
  });

interface AuthorizedContext {
  permissions: NonNullable<Permix<PermissionShape>>;
}

export const authorized = authenticated
  .errors({
    FORBIDDEN: {
      message:
        "Access denied. You don't have permission to perform this action.",
    },
  })
  .use(async ({ next, context, errors }) => {
    const roleId = context.auth.user.roleId;

    if (!roleId) {
      throw errors.UNAUTHORIZED();
    }

    const role = await context.database.query.role.findFirst({
      where: (column) => eq(column.id, roleId),
    });

    if (!role) {
      throw errors.FORBIDDEN();
    }

    const permissionsStore = permix({
      users: {
        create: role.permissions.includes("users.create"),
        details: role.permissions.includes("users.details"),
        list: role.permissions.includes("users.list"),
        remove: role.permissions.includes("users.remove"),
        update: role.permissions.includes("users.update"),
      },
    });

    return await next<AuthorizedContext>({
      context: {
        permissions: permissionsStore,
      },
    });
  });
