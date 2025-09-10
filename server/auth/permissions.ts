import type { InferSelectModel } from "drizzle-orm";
import { createPermix } from "permix";
import type { user } from "@/server/db/schemas";

export const usersPermissions = [
  "create",
  "remove",
  "update",
  "list",
  "details",
] as const;

export type AllPermissions = PermissionStrings<PermissionShape>;

export type PermissionShape = {
  users: {
    action: UsersPermissions;
    dataType: InferSelectModel<typeof user>;
  };
};

export type PermissionStrings<T> = {
  [K in keyof T]: T[K] extends { action: infer A }
    ? A extends string
      ? `${Extract<K, string>}.${A}`
      : never
    : never;
}[keyof T];

type UsersPermissions = (typeof usersPermissions)[number];

export const permix = createPermix<PermissionShape>;
