import { AccountView } from "@daveyplate/better-auth-ui";
import { accountViewPaths } from "@daveyplate/better-auth-ui/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(accountViewPaths).map((path) => ({ path }));
}

export interface AccountPageParams {
  path: string;
}

export interface AccountPageProps {
  params: Promise<AccountPageParams>;
}

const AccountPage: NextPage<AccountPageProps> = async ({ params }) => {
  const { path } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center self-center p-4 md:p-6 min-h-screen">
      <div className="container">
        <AccountView path={path} />
      </div>
    </main>
  );
};

export default AccountPage;
