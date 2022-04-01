export type SignInModel = {
  email: string;
  password: string;
};
export type SignInData = {
  email: string;
  token: string;
  created: boolean;
};

export type AuthState = {
  isSignItLoading: boolean;
  signInSuccess: SignInData | undefined;
  signInError: Error | undefined;
  token: string;
};
