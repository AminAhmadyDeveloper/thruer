import { OpenAPIGenerator } from "@orpc/openapi";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";

import { NextResponse } from "next/server";
import { router } from "@/orpc/router";
import info from "@/package.json" with { type: "json" };

export const GET = async () => {
  const openAPIGenerator = new OpenAPIGenerator({
    schemaConverters: [new ZodToJsonSchemaConverter()],
  });

  const specFromRouter = await openAPIGenerator.generate(router, {
    info: {
      contact: {
        email: "aminahmadydeveloper@gmail.com",
        name: "Amin Ahmady",
        url: "https://aminahmady.vercel.app",
      },
      description: "Open API References For Thruer With oRPC And Better Auth",
      license: {
        identifier: "Thruer",
        name: "MIT",
        url: "https://opensource.org/license/mit",
      },
      summary: "This Api Uses oRPC alongside with Better Auth",
      termsOfService: "https://localhost:3000/legal/terms-of-service",
      title: "Thruer API References",
      version: info.version,
    },

    servers: [
      {
        description: "This is main server",
        url: "/rpc",
      },
    ],
  });

  return NextResponse.json(specFromRouter);
};
