import * as yup from "yup";

type NewTransactionSchemas = {
  name: string;
  amount: number;
  connection: string;
  expectedReleaseDate: string;
  bankId: string;
  witnesses: string[];
};

export const NewTransactionSchema: yup.SchemaOf<NewTransactionSchemas> =
  yup.object({
    name: yup.string().required("Name is required"),
    amount: yup.number().required("Amount is required"),
    connection: yup.string().required("Connection is required"),
    expectedReleaseDate: yup.string().required("Expected release is required"),
    bankId: yup.string().required("Bank account is required"),
    witnesses: yup
      .array()
      .of(yup.string().required("String is required"))
      .required("Witnesses are required"),
  });
// .required();
