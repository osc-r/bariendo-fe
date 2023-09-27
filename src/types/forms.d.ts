export type SignInFormType = {
  email: string;
  password: string;
};

export type SignUpFormType = SignInFormType & {
  confirmPassword: string;
  consent: boolean;
};
