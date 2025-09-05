import { Polar } from "@polar-sh/sdk";
import { variables } from "@/lib/variables-utils";

export const polarClient = new Polar({
  accessToken: variables.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});
