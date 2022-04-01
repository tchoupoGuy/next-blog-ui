import { axiosApi } from "@next/api";
import { backendUrl } from "@next/urls";
import { SignInModel } from "../types";

const signIn = ({ email, password }: SignInModel) =>
  axiosApi.post<SignInModel>(`${backendUrl.singIn}`, { email, password });

export { signIn };
