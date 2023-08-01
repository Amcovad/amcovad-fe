"use client";
import React, { useState, useEffect, FC } from "react";
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
import RepaymentBreakdown from "@/data/dashboard/RepaymentBreakdown";
import { twMerge } from "tailwind-merge";
import { ToastContainer, toast } from "react-toastify";
import transactionService from "../../../../services/transaction";
import { useAppDispatch } from "../../../../redux/hooks";
import { useAppSelector } from "../../../../redux/hooks";
import TransactionLog from "@/components/TransactionLog";
import { useRouter, useSearchParams } from "next/navigation";
import { canShowWitness } from "@/utils/helper-functions";
import { getColor } from "@/utils/helper-functions";

interface PageProps {
  params: { id: string };
}

const SingleTransaction: FC<PageProps> = ({ params: { id } }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const phaseName = searchParams?.get("phaseName");
  const user = useAppSelector((state) => state.auth.user);
  const [transaction, setTransaction] = useState<any>(null);
  React.useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await transactionService.getTransaction(id);
        console.log(data);
        setTransaction(data);
      } catch (error: any) {
        toast.error("Unable to fetch transaction");
      }
    };

    fetchTransactions();
  }, []);

  const updateHistory = async (data: any) => {
    try {
      await transactionService.updateTransactionHistory(data);
      router.push(`/dashboard/transaction/${id}`);
    } catch (error) {
      toast.error("Unable to process transaction operation");
    }
  };

  console.log(phaseName);
  return (
    <>
      <DashboardLayout title={transaction?.name || "Single Transaction"}>
        <div className="mt-8">
          <div className="overflow-x-auto border-2 border-gray-200 rounded-lg mb-4">
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
                    ₦{transaction?.amount.toLocaleString()}
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
                    <div className="flex items-center">
                      {transaction?.lender?.avatar ? (
                        <img
                          src={"/assets/dashboard/User-image4.jpg"}
                          alt="user avatar"
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                      ) : (
                        <span
                          className={classNames(
                            "font-migra text-[#060809] font-extrabold w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                            getColor(transaction?.lender?.firstName)
                          )}
                        >
                          {transaction?.lender?.firstName
                            ?.slice(0, 1)
                            .toUpperCase() +
                            transaction?.lender?.lastName
                              ?.slice(0, 1)
                              .toUpperCase()}
                        </span>
                      )}
                      <span
                        className={classNames(
                          "font-normal ",
                          "ml-3 block truncate"
                        )}
                      >
                        {transaction?.lender?.firstName +
                          " " +
                          transaction?.lender?.lastName}
                        {/* Haruna Popoola (Brother) */}
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
        </div>
        <h1 className="font-Inter font-semibold text-[24px] mb-4 leading-[32px] text-secondary-800">
          View Repayment Breakdown
        </h1>
        <RepaymentBreakdown
          loanAmount={transaction?.amount}
          breakdowns={transaction?.repayments}
        />
        {/* <div>
          <h1 className="font-Inter font-semibold text-[24px] mt-4 mb-2 leading-[32px] text-secondary-800">
            View Repayment Breakdown
          </h1>
          <div className="mt-2">
            <div className="overflow-x-auto border-2 border-gray-200 rounded-lg mb-4">
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
                      ₦300,000
                    </td>
                    <td className="text-left border-b border-gray-300  px-4 py-3">
                      {" "}
                      <div
                        className={twMerge(
                          `inline-flex gap-x-2 items-center bg-[#ECFDF3] h-[22px] text-[#039855] rounded-[20px] py-1 px-1`,
                          "bg-success-50 text-success-700"
                        )}
                      >
                        <span
                          className={twMerge(
                            `inline-block w-[6px] h-[6px] bg-[#039855] rounded-full flex justify-center items-center`,
                            "bg-success-700"
                          )}
                        ></span>
                        <div>Next actions</div>
                      </div>
                    </td>
                    <td className="text-left border-b border-gray-300  px-4 py-3"></td>
                    <td className="text-left border-b border-gray-300  px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Button size="xl">View Breakdown</Button>
          </div>
        </div> */}
        <div>
          <h1 className="font-Inter font-semibold text-[24px] mt-4 mb-2 leading-[32px] text-secondary-800">
            Next Actions
          </h1>
          {transaction?.lender?.id === user?.id &&
          !transaction?.history?.find(
            (record: any) => record.user.id === user?.id
          ) ? (
            <div>
              <Button
                onClick={async () => {
                  await updateHistory({
                    id: transaction.transactionId,
                    value: "reject",
                    phaseName: "lenderDecision",
                  });
                }}
                color="neutral-light"
                size="xs"
                className="bg-[#F5F6F8]"
              >
                Decline
              </Button>
              <Button
                onClick={async () => {
                  await updateHistory({
                    id: transaction.transactionId,
                    value: "accept",
                    phaseName: "lenderDecision",
                  });
                }}
                className="ml-1"
                size="xs"
              >
                Accept Transaction
              </Button>
            </div>
          ) : null}

          {phaseName === "witnessDecision" ? (
            <div>
              <Button
                onClick={async () => {
                  await updateHistory({
                    id: transaction.transactionId,
                    value: "reject",
                    phaseName: "witnessDecision",
                  });
                }}
                color="neutral-light"
                size="xs"
                className="bg-[#F5F6F8]"
              >
                Decline
              </Button>
              <Button
                onClick={async () => {
                  await updateHistory({
                    id: transaction.transactionId,
                    value: "accept",
                    phaseName: "witnessDecision",
                  });
                }}
                className="ml-1"
                size="xs"
              >
                Witness Transaction
              </Button>
            </div>
          ) : null}

          {/* <div className="mt-2">
            <div className="overflow-x-auto border-2 border-gray-200 rounded-lg mb-4">
              <table className="min-w-full rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                      S/N
                    </th>
                    <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                      Date
                    </th>
                    <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                      Action
                    </th>
                    <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                      Actor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left px-4 py-2">1</td>
                    <td className="text-left px-4 py-2">17th April, 2023</td>
                    <td className="text-left px-4 py-2">
                      Confirm the transaction acceptance
                    </td>
                    <td className="text-left px-4 py-2">
                      <div className="flex items-center">
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
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Button size="xl" color="secondary">
              View Breakdown
            </Button>
          </div> */}
        </div>
        <div>
          <h1 className="font-Inter font-semibold text-[24px] mt-4 mb-2 leading-[32px] text-secondary-800">
            Completed Actions
          </h1>
          {transaction?.history?.length ? (
            <div className="mt-2">
              <div className="overflow-x-auto border-2 border-gray-200 rounded-lg mb-4">
                <table className="min-w-full rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                        S/N
                      </th>
                      <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                        Date
                      </th>
                      <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                        Log
                      </th>
                      <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                        User
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction?.history?.map((record: any, i: number) => {
                      return (
                        <tr key={i}>
                          <td className="text-left px-4 py-2">{i + 1}</td>
                          <td className="text-left px-4 py-2">
                            {new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(record?.createdAt))}
                          </td>
                          <TransactionLog
                            phaseName={record?.phase?.phaseName}
                            value={record?.value}
                          />
                          {/* <td className="text-left px-4 py-2">
                            Confirm the transaction acceptance
                          </td> */}
                          <td className="text-left px-4 py-2">
                            <div className="flex items-center">
                              {record?.user?.avatar ? (
                                <img
                                  src={"/assets/dashboard/User-image4.jpg"}
                                  alt="user avatar"
                                  className="h-6 w-6 flex-shrink-0 rounded-full"
                                />
                              ) : (
                                <span
                                  className={classNames(
                                    "font-migra text-[#060809] font-extrabold w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                                    getColor(transaction?.user?.firstName)
                                  )}
                                >
                                  {record?.user?.firstName
                                    ?.slice(0, 1)
                                    .toUpperCase() +
                                    record?.user?.lastName
                                      ?.slice(0, 1)
                                      .toUpperCase()}
                                </span>
                              )}

                              <span
                                className={classNames(
                                  "font-normal ",
                                  "ml-3 block truncate"
                                )}
                              >
                                {record?.user?.firstName +
                                  " " +
                                  record?.user?.lastName}
                                {/* Haruna Popoola (Brother) */}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <Button size="xl" color="secondary">
                View Breakdown
              </Button>
            </div>
          ) : null}
        </div>
        <ToastContainer />
      </DashboardLayout>
    </>
  );
};

export default SingleTransaction;
