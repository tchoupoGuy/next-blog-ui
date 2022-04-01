import * as yup from "yup";
import { FormSchema } from "@next/components/form";
import { SignInModel } from "./types";

export const signInFormSchema: FormSchema<SignInModel> = yup.object({
  email: yup.string().email("Invalid email").required("email required"),
  password: yup.string().required("required").min(8, "Invalid password"),
});
