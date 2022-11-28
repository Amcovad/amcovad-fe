import * as yup from "yup";

type ContactUsSchema = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
export const contactUsSchema: yup.SchemaOf<ContactUsSchema> = yup
  .object({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(4, "Mininum 4 characters")
      .max(40, "Maximum 30 characters"),

    email: yup
      .string()
      .email("Kindly provide a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .min(11, "Mininum of 11 numbers "),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required").min(50),
  })
  .required();
