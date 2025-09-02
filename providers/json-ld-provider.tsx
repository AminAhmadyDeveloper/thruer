"use client";

import type {
  Event,
  Graph,
  Organization,
  Person,
  Thing,
  WithContext,
} from "schema-dts";

import { useInjectScript } from "@/hooks/use-inject-script";
import { stringifyJSON } from "@/lib/json-utils";

type JSONLDTypes = Event | Organization | Person | Thing;

export const JsonLdProvider = <T extends JSONLDTypes>({
  children,
}: {
  children: Graph | WithContext<T>;
}) => {
  const script = stringifyJSON(children).replaceAll("<", String.raw`\u003c`);

  useInjectScript(script, "body", { type: "application/ld+json" });
  return null;
};
