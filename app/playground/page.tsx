"use client";
import React from "react";
import type { NextPage } from "next";
import CurrencyInput from "@/components/inputs/CurrencyInput";
import Button from "@/components/form/Button";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Page = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        amount: yup.number(),
        // .email("Kindly provide a valid email address")
        // .required("Email is required"),
      })
    ),
  });

  React.useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods, methods.formState.isSubmitSuccessful]);

  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <FormProvider {...methods}>
        <div className="w-1/2 mx-auto">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-6">
              <CurrencyInput label="Amount" name="amount" />
            </div>
            <div>
              <Button
                loading={methods.formState.isSubmitting}
                disabled={
                  methods.formState.isSubmitting || !methods.formState.isValid
                }
                className="w-full uppercase"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </FormProvider>
    </div>
  );
};

export default Page;
