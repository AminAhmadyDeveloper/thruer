import { headers } from "next/headers";
import { auth } from "@/server/auth";

export const getSessionOnServer = async () => {
  const headersStore = await headers();
  const session = await auth.api.getSession({ headers: headersStore });
  return session;
};
