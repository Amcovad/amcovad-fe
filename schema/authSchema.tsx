import * as yup from "yup";

type SignInSchemas = {
  email: string;
  password: string;
};

type SignUpSchemas = {
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms?: boolean;
  agreeContact?: boolean;
};

type ForgotPasswordSchemas = {
  email: string;
};

export const SignInSchema: yup.SchemaOf<SignInSchemas> = yup
  .object({
    email: yup
      .string()
      .email("Kindly provide a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 character long"),
  })
  .required();

export const SignUpSchema: yup.SchemaOf<SignUpSchemas> = yup
  .object({
    email: yup
      .string()
      .email("Kindly provide a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "Password should be of minimum 6 characters length"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Password's not match"),
    acceptTerms: yup
      .boolean()
      .oneOf([true], "Must Accept Terms and Conditions"),
    agreeContact: yup.boolean(),
  })
  .required();

export const ForgotPasswordSchema: yup.SchemaOf<ForgotPasswordSchemas> = yup
  .object({
    email: yup
      .string()
      .email("Kindly provide a valid email address")
      .required("Email address is required"),
  })
  .required();
