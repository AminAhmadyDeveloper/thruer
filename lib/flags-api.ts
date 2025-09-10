import { flag } from "flags/next";
import { variables } from "@/lib/variables-utils";

export const payedAiFlag = flag({
  key: "payed-ai",
  description: "It activate GapGpt payed ai.",
  decide() {
    return variables.PAYED_AI;
  },
});
