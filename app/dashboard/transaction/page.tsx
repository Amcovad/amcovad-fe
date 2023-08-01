"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import createNew from "@/data/dashboard/createNew";
import CreateNewTransact from "@/components/dashboard/component/card/CreateNewTransact";
import userTransaction from "@/data/dashboard/userTransaction";
import TransactionRowCard from "@/components/dashboard/component/card/TransactionRowCard";
import { ToastContainer, toast } from "react-toastify";
import transactionService from "../../../services/transaction";
import { useAppDispatch } from "../../../redux/hooks";
import { useAppSelector } from "../../../redux/hooks";
import classNames from "classnames";
import { getColor } from "@/utils/helper-functions";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [activeTransactions, setActiveTransactions] = useState([]);

  React.useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await transactionService.getUserTransactions();
        console.log(data);
        setTransactions(data);
      } catch (error: any) {
        toast.error("Unable to fetch transactions list");
      }
    };

    fetchTransactions();
  }, []);

  React.useEffect(() => {
    const fetchActiveTransactions = async () => {
      try {
        const data = await transactionService.getActiveTransactions();
        console.log(data);
        setActiveTransactions(data);
      } catch (error: any) {
        toast.error("Unable to fetch transactions list");
      }
    };

    fetchActiveTransactions();
  }, []);

  return (
    <>
      <DashboardLayout title="Transaction">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
          {createNew.map(
            ({ Icon, iconColor, title, url, color, btnTitle }, index) => (
              <CreateNewTransact
                Icon={Icon}
                iconColor={iconColor}
                title={title}
                url={url}
                key={index}
                btnTitle={btnTitle}
                color={color}
              />
            )
          )}
        </div>

        <div className="px-4 lg:px-0 mt-4">
          <h2 className="pt-10 font-Inter text-xl lg:text-3xl font-bold text-black">
            User Transactions
          </h2>

          <div className="relative overflow-x-auto shadow-md rounded-lg my-5 lg:mb-10 xl:mr-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-500 font-Inter capitalize bg-gray-100 ">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    User
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-4">
                    About
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Users
                  </th>
                  {/* <th scope="col" className="px-6 py-4">
                    Completion
                  </th> */}
                  <th scope="col" className="px-6 py-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(
                  (
                    {
                      user: { firstName, lastName },
                      name,
                      type,
                      transactionId,
                      lender,
                      witnessesDetails,
                      // transactionDescription,
                      // userImages,
                      // complection,
                    },
                    index
                  ) => (
                    <TransactionRowCard
                      key={index}
                      userName={firstName + " " + lastName}
                      id={transactionId}
                      type={type}
                      transactionTitle={name}
                      participants={[...witnessesDetails, lender]}
                      userAvatarUrl={"/assets/dashboard/user/user1.jpg"}
                      firstName={firstName}
                      lastName={lastName}

                      // userTag={userTag}
                      // transactionDescription={transactionDescription}
                      // userImages={userImages}
                      // complection={complection}
                    />
                  )
                )}
                {/* {userTransaction.map(
                  (
                    {
                      userAvatarUrl,
                      userName,
                      userTag,
                      transactionTitle,
                      transactionDescription,
                      userImages,
                      complection,
                      additionalUserImages,
                    },
                    index
                  ) => (
                    <TransactionRowCard
                      key={index}
                      userName={userName}
                      userTag={userTag}
                      transactionTitle={transactionTitle}
                      transactionDescription={transactionDescription}
                      userImages={userImages}
                      complection={complection}
                      additionalUserImages={additionalUserImages}
                      userAvatarUrl={userAvatarUrl}
                    />
                  )
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
