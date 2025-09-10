import { ORPCError } from "@orpc/client";
import * as Sentry from "@sentry/nextjs";
import { z } from "zod/v4";
import { groupedFeatures } from "@/data/features";
import { base } from "@/orpc/procedures";

const featureSchema = z.object({
  name: z.string(),
  description: z.string(),
  logo: z.string(),
  brandColor: z.string(),
  link: z.string().optional(),
});

const groupedFeaturesSchema = z.record(z.string(), z.array(featureSchema));

export const getAllFeaturesList = base
  .output(groupedFeaturesSchema)
  .route({ method: "GET" })
  .handler(() => groupedFeatures);

export const createError = base.handler(async () => {
  try {
    throw new ORPCError("BAD_REQUEST", { message: "To test Sentry" });
  } catch (error) {
    console.log({ error });

    Sentry.captureException(error);
    throw error;
  }
});
