export type SignInFormType = {
  email: string;
  password: string;
};

export type SignUpFormType = SignInFormType & {
  confirmPassword: string;
  consent: boolean;
};

export type BookingFormType = {
  type: string;
  month: string;
  date: string;
  time: string[];
};
