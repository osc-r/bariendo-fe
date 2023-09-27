import { SubmitHandler } from "react-hook-form";

export type DefaultFormProps<T> = {
  onSubmit: SubmitHandler<T>;
};
