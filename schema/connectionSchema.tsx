import * as yup from "yup";

type NewConnectionSchemas = {
  connection: string;
  relationship: string;
};

export const newConnectionSchema: yup.SchemaOf<NewConnectionSchemas> =
  yup.object({
    connection: yup.string().required("Select a user"),
    relationship: yup.string().required("Select a relationship type"),
  });
// .required();
