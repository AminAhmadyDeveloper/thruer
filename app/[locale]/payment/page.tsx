import { CircleCheckIcon } from "lucide-react";
import Link from "next/link";
import { createLoader, parseAsString, type SearchParams } from "nuqs/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { polarClient } from "@/server/payment/polar";

const coordinatesSearchParams = {
  checkout_id: parseAsString,
  customer_session_token: parseAsString,
};

const loadSearchParams = createLoader(coordinatesSearchParams);

interface PaymentPageProps {
  searchParams: Promise<SearchParams>;
}

const PaymentPage: NextPage<PaymentPageProps> = async ({ searchParams }) => {
  const { checkout_id } = await loadSearchParams(searchParams);

  if (!checkout_id) return null;

  const checkoutDetails = await polarClient.checkouts.get({ id: checkout_id });

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <CircleCheckIcon className="text-green-500 w-16 h-16" />
        <h1 className="text-2xl font-bold">Payment Successful</h1>
        <p className="text-muted-foreground">
          Thank you for your purchase! Your order is being processed.
        </p>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-[1fr_auto] items-center">
            <span className="text-muted-foreground">Order #</span>
            <span>{checkoutDetails.id}</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center">
            <span className="text-muted-foreground">Total</span>
            <span className="font-medium">${checkoutDetails.amount / 100}</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center">
            <span className="text-muted-foreground">Payment Processor</span>
            <span>{checkoutDetails.paymentProcessor}</span>
          </div>
        </CardContent>
      </Card>
      <Link
        href="/chat"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        prefetch={false}
      >
        Go to Chat
      </Link>
    </div>
  );
};

export default PaymentPage;
