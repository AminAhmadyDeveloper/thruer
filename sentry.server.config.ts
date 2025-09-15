import { ORPCInstrumentation } from "@orpc/otel";
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8c44fa6791370cce709d8c98c933cc49@o4509832985772032.ingest.de.sentry.io/4509973555707984",
  tracesSampleRate: 1,
  enableLogs: true,
  debug: false,
  openTelemetryInstrumentations: [new ORPCInstrumentation()],
});
