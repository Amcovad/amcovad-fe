import * as yup from "yup";

type SignInSchemas = {
  email: string;
  password: string;
};

export const SignInSchema: yup.SchemaOf<SignInSchemas> = yup
  .object({
    email: yup
      .string()
      .email("Kindly provide a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "Password must be atleast 6 character long"),
  })
  .required();
