import * as yup from "yup";

type NewBankSchemas = {
  name: string;
  accountName: string;
  accountNumber: string;
};

export const NewBankSchema: yup.SchemaOf<NewBankSchemas> = yup.object({
  name: yup.string().required("Bank name is required"),
  accountName: yup.string().required("Account name is required"),
  accountNumber: yup
    .string()
    .required("Account number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
});
// .required();
