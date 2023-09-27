export type LoginFormType = {
  username: string;
  password: string;
};

export type RegisterFormType = LoginFormType & {
  email: string;
  confirmPassword: string;
};
