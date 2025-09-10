import { createFlagsDiscoveryEndpoint, getProviderData } from "flags/next";
import * as flags from "./../../../../lib/flags-api";

export const GET = createFlagsDiscoveryEndpoint(() => getProviderData(flags));
