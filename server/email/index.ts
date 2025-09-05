import { Resend } from "resend";
import { variables } from "@/lib/variables-utils";

export const resend = new Resend(variables.RESEND_API_KEY);
