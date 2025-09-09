import { AuthView } from "@daveyplate/better-auth-ui";
import { authViewPaths } from "@daveyplate/better-auth-ui/server";
import type { FC } from "react";
import { routing } from "@/i18n/routing";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.values(authViewPaths).map((path) => ({
      locale,
      path,
    })),
  );
}
export interface AuthPageParams {
  path: string;
}

export interface AuthPageProps {
  params: Promise<AuthPageParams>;
}

const AuthPage: FC<AuthPageProps> = async ({ params }) => {
  const { path } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center self-center p-4 md:p-6 min-h-screen">
      <AuthView path={path} />
    </main>
  );
};

export default AuthPage;
