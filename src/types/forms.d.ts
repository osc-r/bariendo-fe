export type LoginFormType = {
  email: string;
  password: string;
};

export type RegisterFormType = LoginFormType & {
  email: string;
  confirmPassword: string;
};
