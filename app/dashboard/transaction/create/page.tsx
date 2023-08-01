"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HookForm from "@/components/form/Form";
import { SignInSchema } from "schema/authSchema";
import Input from "@/components/form/Input";
import CustomSelect from "@/components/form/CustomSelect";
import people from "@/data/dashboard/userData";
import Button from "@/components/form/Button";
import TabTransansaction from "@/components/TabTransansaction";
import { ArrowRight } from "iconsax-react";
import { NewTransactionSchema } from "schema/transactionSchema";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import NewInput from "@/components/inputs/Input";
import { InfoCircle } from "iconsax-react";
import LoanRepaymentSchedule from "@/data/dashboard/LoanRepaymentSchedule";
import LoanRepaymentSummary from "@/data/dashboard/LoanRepaymentSummary";
import MultiCustomSelect from "@/components/inputs/MultiCustomSelect";
import SingleCustomSelect from "@/components/inputs/SingleCustomSelect";
import Datepicker from "@/components/form/Datepicker";
import { useRouter } from "next/navigation";
import connectionService from "../../../../services/connection";
import bankService from "../../../../services/bank";
import transactionService from "../../../../services/transaction";
import { useAppDispatch } from "../../../../redux/hooks";
import { useAppSelector } from "../../../../redux/hooks";
import { toast, ToastContainer } from "react-toastify";
import SelectBank from "@/components/inputs/SelectBank";
import CurrencyInput from "@/components/inputs/CurrencyInput";
import { getColor } from "@/utils/helper-functions";

const repaymentPlan: any = {
  oneoff: "",
  daily: "days",
  weekly: "weeks",
  monthly: "months",
  yearly: "years",
};

function NewTransaction() {
  const [formStep, setFormStep] = useState(0);
  const [period, setPeriod] = useState("");
  const [breakdownAmount, setBreakdownAmount] = useState(1);
  const [periodTimes, setPeriodTimes] = useState(1);
  const [startingDate, setStarting] = useState("");
  const [lender, setLender] = useState<any>(null);
  const user = useAppSelector((state) => state.auth.user);
  const [acceptedConnections, setAcceptedConnections] = React.useState([]);
  const [banks, setBanks] = useState([]);
  //   const dispatch = useAppDispatch();
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(NewTransactionSchema),
  });

  React.useEffect(() => {
    const fetchAcceptedConnections = async () => {
      try {
        const data = await connectionService.getAcceptedConnections();
        console.log(data);
        setAcceptedConnections(data);
      } catch (error: any) {
        toast.error("Unable to fetch connections list");
      }
    };

    fetchAcceptedConnections();
  }, []);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const data = await bankService.getBanks();
        setBanks(data);

        // dispatch(setBank(response));
      } catch (error: any) {
        toast.error("Unable to fetch banks list");
      }
    };

    fetchBanks();
  }, []);

  const router = useRouter();

  const options = [
    { value: "oneoff", label: "One off" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  React.useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
      toast.success("Loan request has been sent");
    }
  }, [methods, methods.formState.isSubmitSuccessful]);

  React.useEffect(() => {
    // console.log(period);
    // console.log(methods.getValues("amount"));
    if (period == "oneoff") {
      setBreakdownAmount(methods.getValues("amount"));
    }
  }, [period, methods.getValues("amount"), setBreakdownAmount]);

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));
    // console.log(JSON.stringify(data));
    const repaymentSchedule = [];

    let loanAmount = methods.getValues("amount");
    let repaymentAmount = breakdownAmount;
    let startDate = startingDate;
    //let frequency = repaymentPlan[period]; // or "days", "months", "years"
    let frequencyValue = periodTimes; // specify the number of days, weeks, months, or years
    let isOneOffPayment = period === "oneoff" ? true : false; // set to true for one-off payment

    let remainingAmount = data.amount;
    let currentDate = new Date(startDate);

    const frequencyInDays: any = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    const daysInFrequency: number = frequencyInDays[period] * frequencyValue;

    if (isOneOffPayment) {
      repaymentSchedule.push({
        date: currentDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        amount: loanAmount,
      });
    } else {
      while (remainingAmount > 0) {
        const repaymentDate = new Date(currentDate);
        repaymentDate.setDate(repaymentDate.getDate() + daysInFrequency);

        const actualRepaymentAmount =
          remainingAmount >= repaymentAmount
            ? repaymentAmount
            : remainingAmount;

        repaymentSchedule.push({
          date: repaymentDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          amount: actualRepaymentAmount,
        });

        remainingAmount -= actualRepaymentAmount;
        currentDate = repaymentDate;
      }
    }

    const { witnesses, connection, ...dataObj } = data;

    // console.log({
    //   ...dataObj,
    //   lenderId: connection,
    //   witnessesIds: witnesses,
    //   type: "Loan",
    //   repaymentPlans: repaymentSchedule.map((plan: any) => {
    //     return { ...plan, fixed: true, amount: +plan.amount };
    //   }),
    // });

    try {
      await transactionService.create({
        ...dataObj,
        lenderId: connection,
        witnessesIds: witnesses,
        type: "Loan",
        repaymentPlans: repaymentSchedule.map((plan: any) => {
          return { ...plan, fixed: true, amount: +plan.amount };
        }),
      });
      // console.log(dataResponse);
      toast.success("Loan request has been sent");
    } catch (error: any) {
      toast.error("Unable to make loan request");
    }
    // router.push("/dashboard/transaction/single");
  };
  return (
    <>
      <DashboardLayout
        title={
          formStep === 0 ? "Borrow Money from Connection" : "Payment Details"
        }
      >
        <div className="mt-8 px-4">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {formStep === 0 ? (
                <div className="space-y-3 lg:space-y-6">
                  <div>
                    <Input
                      label="Transaction Name"
                      name="name"
                      placeholder="Enter your Transaction Name"
                      className="border"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className="w-full lg:w-1/2">
                      <CurrencyInput
                        label="Amount"
                        name="amount"
                        // placeholder="Amount to Borrow"
                        // type="number"
                      />
                    </div>
                    <div className="w-full lg:basis-1/2">
                      <SingleCustomSelect
                        name="connection"
                        data={acceptedConnections.map((conn: any) => {
                          return conn.user.id === user.id
                            ? {
                                ...conn.connection,
                                relationship: conn.relationship,
                                id: conn.id,
                              }
                            : {
                                ...conn.user,
                                relationship: conn.relationship,
                                id: conn.id,
                              };
                        })}
                        setLender={setLender}
                      />
                    </div>
                  </div>
                  <div>
                    {/* <Datepicker
                      label="Expected Date to Release Money"
                      name="expectedReleaseDate"
                      placeholder="Date to Receive Money"
                    /> */}
                    <Input
                      label="Expected Date to Release Money"
                      name="expectedReleaseDate"
                      placeholder="Date to Receive Money"
                      type="date"
                    />
                  </div>
                  <div className="mt-6">
                    {options.map((option) => (
                      <label
                        key={option.value}
                        htmlFor={option.value}
                        className={classNames(
                          "py-3.5 px-10 mr-2 mb-2 text-xl font-medium focus:outline-none font-Inter rounded-md shadow-sm border border-secondary-300 outline-none focus:ring-secondary-300 cursor-pointer",
                          {
                            "bg-secondary-50/80 text-secondary-700":
                              period !== option.value,
                          },
                          {
                            "bg-secondary-700 text-secondary-25":
                              period === option.value,
                          }
                        )}
                      >
                        <input
                          type="radio"
                          id={option.value}
                          value={option.value}
                          checked={option.value === period}
                          onChange={(e) => setPeriod(e.target.value)}
                          className="hidden"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {period !== "" ? (
                    <div className="mt-6">
                      <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="w-full lg:w-1/3">
                          <NewInput
                            label="Breakdown Amount"
                            name="breakdownAmount"
                            placeholder="Breakdown Amont"
                            type="number"
                            value={breakdownAmount}
                            onChange={(e) =>
                              setBreakdownAmount(+e.target.value)
                            }
                            disabled={period === "oneoff"}
                          />
                        </div>
                        <div className=" w-full lg:basis-1/3">
                          <NewInput
                            label="Every"
                            name="every"
                            value={periodTimes}
                            placeholder="Frequency of payment"
                            type="number"
                            onChange={(e) => setPeriodTimes(+e.target.value)}
                          />
                        </div>
                        <div className=" w-full lg:basis-1/3">
                          <NewInput
                            label="Starting from date"
                            name="startingDate"
                            placeholder="Starting from date"
                            value={startingDate}
                            type="date"
                            onChange={(e) => setStarting(e.target.value)}
                          />
                        </div>
                      </div>
                      <LoanRepaymentSummary
                        loanAmount={methods.getValues("amount")}
                        repaymentAmount={breakdownAmount}
                        startDate={startingDate}
                        frequency={repaymentPlan[period]} // or "days", "months", "years"
                        frequencyValue={periodTimes} // specify the number of days, weeks, months, or years
                        isOneOffPayment={period === "oneoff" ? true : false} // set to true for one-off payment
                        period={period}
                      />
                    </div>
                  ) : null}
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto border-2 border-gray-200 rounded-lg mb-8">
                    <table className="min-w-full rounded-lg overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                            Date
                          </th>
                          <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                            Amount
                          </th>
                          <th className="text-left px-4 border-b-2 border-gray-200 py-2"></th>
                          <th className="text-left px-4 border-b-2 border-gray-200 py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="text-left border-b border-gray-300  font-bold text-[14px] leading-[20px] text-gray-500 px-4 py-3">
                            Total Amount
                          </td>

                          <td className="text-left border-b border-gray-300  font-bold text-[16px] leading-[24px] text-gray-500 px-4 py-3">
                            ₦ {methods.getValues("amount")}
                          </td>
                          <td className="text-left border-b border-gray-300  px-4 py-3"></td>
                          <td className="text-left border-b border-gray-300  px-4 py-3"></td>
                          <td className="text-left border-b border-gray-300  px-4 py-3"></td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-left font-bold text-[14px] leading-[20px] text-gray-500 px-4 py-3">
                            Connection
                          </td>

                          <td className="text-left font-bold text-[16px] leading-[24px] text-gray-500 px-4 py-3">
                            {/* <div className="flex items-center">
                              <img
                                src={"/assets/dashboard/User-image4.jpg"}
                                alt="user avatar"
                                className="h-6 w-6 flex-shrink-0 rounded-full"
                              />
                              <span
                                className={classNames(
                                  "font-normal ",
                                  "ml-3 block truncate"
                                )}
                              >
                                Haruna Popoola (Brother)
                              </span>
                            </div> */}
                            <div className="flex items-center">
                              {/* <img
                                src={
                                  lender?.avatar ||
                                  "/assets/dashboard/user/user1.jpg"
                                }
                                alt="user avatar"
                                className="h-8 w-8 flex-shrink-0 rounded-full"
                              /> */}
                              <span
                                className={classNames(
                                  "font-migra text-[#060809] text-xs font-bold w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                                  getColor(lender?.firstName)
                                )}
                              >
                                {lender ? (
                                  <>
                                    {lender?.firstName
                                      ?.slice(0, 1)
                                      .toUpperCase() +
                                      lender?.lastName
                                        ?.slice(0, 1)
                                        .toUpperCase()}
                                  </>
                                ) : null}
                              </span>
                              <span
                                className={classNames(
                                  lender ? "font-semibold" : "font-normal ",
                                  "ml-3 block truncate"
                                )}
                              >
                                {lender?.firstName +
                                  " " +
                                  lender?.lastName +
                                  " (" +
                                  lender?.relationship +
                                  ")"}
                              </span>
                            </div>
                          </td>
                          <td className="text-left px-4 py-3"></td>
                          <td className="text-left px-4 py-3"></td>
                          <td className="text-left px-4 py-3"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <LoanRepaymentSummary
                    loanAmount={methods.getValues("amount")}
                    repaymentAmount={breakdownAmount}
                    startDate={startingDate}
                    frequency={repaymentPlan[period]} // or "days", "months", "years"
                    frequencyValue={periodTimes} // specify the number of days, weeks, months, or years
                    isOneOffPayment={period === "oneoff" ? true : false} // set to true for one-off payment
                    period={period}
                  />
                  <h1 className="font-Inter mt-[51px] font-semibold text-[24px] mb-4 leading-[32px] text-secondary-800">
                    View Repayment Breakdown
                  </h1>
                  <LoanRepaymentSchedule
                    loanAmount={methods.getValues("amount")}
                    repaymentAmount={breakdownAmount}
                    startDate={startingDate}
                    frequency={repaymentPlan[period]} // or "days", "months", "years"
                    frequencyValue={periodTimes} // specify the number of days, weeks, months, or years
                    isOneOffPayment={period === "oneoff" ? true : false} // set to true for one-off payment
                  />

                  <div className="mt-6 space-y-3 lg:space-y-6">
                    <div>
                      <SelectBank name="bankId" data={banks} />
                    </div>
                    {/* <div>
                      <Input
                        label="Account Name"
                        name="accountName"
                        placeholder="Enter your Account Name"
                        className="border"
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <div className="w-full lg:w-1/2">
                        <Input
                          label="Account Number"
                          name="accountNumber"
                          placeholder="Account Number"
                          type="number"
                        />
                      </div>
                      <div className=" w-full lg:basis-1/2">
                        <Input
                          label="Bank Name"
                          name="bankName"
                          placeholder="Bank Name"
                        />
                      </div>
                    </div> */}
                    <div className="mt-4">
                      <MultiCustomSelect
                        name="witnesses"
                        data={acceptedConnections
                          .map((conn: any) => {
                            return conn.user.id === user.id
                              ? {
                                  ...conn.connection,
                                  relationship: conn.relationship,
                                  id: conn.id,
                                }
                              : {
                                  ...conn.user,
                                  relationship: conn.relationship,
                                  id: conn.id,
                                };
                          })
                          .filter((user) => user.id !== lender.id)}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="mt-6">
                {formStep === 0 ? (
                  <Button
                    type="button"
                    disabled={
                      !methods.getValues("amount") ||
                      !period ||
                      !startingDate ||
                      !periodTimes
                    }
                    onClick={() => setFormStep(1)}
                    size="lg"
                    rightIcon={<ArrowRight size="24" color="#ffffff" />}
                  >
                    Continue
                  </Button>
                ) : (
                  <div className="flex flex-row gap-x-2">
                    <Button
                      type="button"
                      onClick={() => setFormStep(0)}
                      size="lg"
                    >
                      Back
                    </Button>
                    <Button
                      disabled={
                        !methods.formState.isValid ||
                        methods.formState.isSubmitting
                      }
                      loading={methods.formState.isSubmitting}
                      size="lg"
                      // rightIcon={<ArrowRight size="24" color="#ffffff" />}
                      type="submit"
                    >
                      Submit Form
                    </Button>
                  </div>
                )}
              </div>
            </form>
            <ToastContainer />
          </FormProvider>

          {/* <HookForm onSubmit={onSubmit} schema={SignInSchema}>
            <div className=" space-y-3 lg:space-y-6">
              <div>
                <Input
                  label="Transaction Name"
                  name="transaction"
                  placeholder="Enter your Transaction Name"
                  className="border"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-full lg:w-1/2">
                  <Input
                    label="Amount"
                    name="amount"
                    placeholder="Amount to Lend to Friend"
                    type="number"
                  />
                </div>
                <div className=" w-full lg:basis-1/2">
                  <CustomSelect
                    selected={selected}
                    setSelected={setSelected}
                    data={people}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-full lg:w-1/2">
                  <Input
                    label="Expected Date to Receive Money"
                    name="date-to-receive-money"
                    placeholder="Date to Receive Money"
                  />
                </div>
                <div className=" w-full lg:basis-1/2">
                  <Input
                    label="Expected Date of Return Money"
                    name="date-to-receive-money"
                    placeholder="Date to Return Payment"
                  />
                </div>
              </div>
              <TabTransansaction data={repaymentPlan} />
              <div className="">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight size="24" color="#ffffff" />}
                >
                  Continue
                </Button>
              </div>
            </div>
          </HookForm> */}
        </div>
        {/* <pre>{JSON.stringify(methods.watch(), null, 2)}</pre> */}
      </DashboardLayout>
    </>
  );
}

export default NewTransaction;
