import { checkout, polar, portal } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import VerificationEmail from "@/emails/verification-email";
import { variables } from "@/lib/variables-utils";
import { database } from "@/server/db";
import { resend } from "@/server/email";
import { polarClient } from "@/server/payment/polar";

export const auth = betterAuth({
  baseURL: variables.NEXT_PUBLIC_BETTER_AUTH_URL,
  database: drizzleAdapter(database, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  emailVerification: {
    sendOnSignIn: true,
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email",
        react: VerificationEmail({
          validationUrl: url,
        }),
      });
    },
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "9cdea262-c7fe-4c49-8756-11acc011b35f",
              slug: "50-tokens",
            },
          ],
          successUrl: "/payment?checkout_id={CHECKOUT_ID}",
          authenticatedUsersOnly: true,
        }),
        portal(),
      ],
    }),
  ],
  user: {
    additionalFields: {
      roleId: {
        defaultValue: null,
        references: { field: "id", model: "role" },
        required: false,
        type: "string",
      },
    },
  },
});
