import {
  createError,
  getAllFeaturesList,
} from "@/server/api/routers/features/features-service";

export const featuresRouter = {
  list: getAllFeaturesList,
  error: createError,
};
