import { AccountView } from "@daveyplate/better-auth-ui";
import { accountViewPaths } from "@daveyplate/better-auth-ui/server";
import { routing } from "@/i18n/routing";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.values(accountViewPaths).map((path) => ({
      locale,
      path,
    }))
  );
}

export type AccountPageParams = {
  path: string;
};

export type AccountPageProps = {
  params: Promise<AccountPageParams>;
};

const AccountPage: NextPage<AccountPageProps> = async ({ params }) => {
  const { path } = await params;

  return (
    <main className="flex min-h-screen grow flex-col items-center justify-center self-center p-4 md:p-6">
      <div className="container">
        <AccountView path={path} />
      </div>
    </main>
  );
};

export default AccountPage;
