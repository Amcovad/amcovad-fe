"use client";
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Button from "@/components/form/Button";
import Link from "next/link";
import HookForm from "@/components/form/Form";
import { SignInSchema } from "schema/authSchema";
import Input from "@/components/form/Input";
import CustomSelect from "@/components/form/CustomSelect";
import people from "@/data/dashboard/userData";
import TabTransansaction from "@/components/TabTransansaction";
import { ArrowRight } from "iconsax-react";
import { NewBankSchema } from "schema/bankSchema";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import NewInput from "@/components/inputs/Input";
import LoanRepaymentSummary from "@/data/dashboard/LoanRepaymentSummary";
import MultiCustomSelect from "@/components/inputs/MultiCustomSelect";
import SingleCustomSelect from "@/components/inputs/SingleCustomSelect";
import Datepicker from "@/components/form/Datepicker";
import { useRouter } from "next/router";
import bankService from "../../../../services/bank";
import { useAppDispatch } from "../../../../redux/hooks";
import { useAppSelector } from "../../../../redux/hooks";
import { setBank } from "../../../../redux/slices/bank";
import { toast, ToastContainer } from "react-toastify";

function Dashboard() {
  //   const dispatch = useAppDispatch();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(NewBankSchema),
  });

  React.useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods, methods.formState.isSubmitSuccessful]);

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));
    try {
      await bankService.add({ ...data, isDefault: false });
      toast.success("New bank successfully added");

      //   dispatch(setBank(response.data));
    } catch (error: any) {
      toast.error("Unable to add bank");
    }
    // console.log(JSON.stringify(data));
    // router.push("/app/transaction/single");
  };
  return (
    <>
      <DashboardLayout title="Add New Bank">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className=" space-y-3 lg:space-y-6">
              <div>
                <Input
                  label="Bank Name"
                  name="name"
                  placeholder="Enter your Bank Name"
                  className="border"
                />
              </div>
              <div>
                <Input
                  label="Account Name"
                  name="accountName"
                  placeholder="Enter your Account Name"
                  className="border"
                />
              </div>
              <div>
                <Input
                  label="Account Number"
                  name="accountNumber"
                  placeholder="Enter your Account Number"
                  className="border"
                />
              </div>
              <div className="mt-4">
                <Button
                  loading={methods.formState.isSubmitting}
                  disabled={
                    methods.formState.isSubmitting || !methods.formState.isValid
                  }
                  size="lg"
                  //   rightIcon={<ArrowRight size="24" color="#ffffff" />}
                >
                  Add new bank
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </DashboardLayout>
      <ToastContainer />
    </>
  );
}

export default Dashboard;
