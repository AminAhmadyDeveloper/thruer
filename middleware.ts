import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: "/((?!monitoring|api|rpc|_next|_vercel|.*\\..*).*)",
};
