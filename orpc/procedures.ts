import { os } from "@orpc/server";
import { headers } from "next/headers";
import { auth } from "@/server/auth";
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
  headers: NonNullable<Headers>;
  auth: NonNullable<AuthenticationSession>;
}

export const authenticated = base
  .errors({
    FORBIDDEN: {
      message:
        "Access denied. You don't have permission to perform this action.",
    },
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
