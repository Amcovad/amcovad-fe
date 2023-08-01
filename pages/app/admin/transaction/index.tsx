import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import createNew from "@/data/dashboard/createNew";
import CreateNewTransact from "@/components/dashboard/component/card/CreateNewTransact";
import userTransaction from "@/data/dashboard/userTransaction";
import TransactionRowCard from "@/components/dashboard/component/card/TransactionRowCard";

function Dashboard() {
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

        <div className="px-4 lg:px-0">
          <h2 className="pt-10 font-Inter text-xl lg:text-3xl font-bold text-black">
            Active Transaction
          </h2>

          <div className="relative overflow-x-auto shadow-md rounded-lg my-5 lg:mb-10 xl:mr-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-500 font-Inter capitalize bg-gray-100 ">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    User
                  </th>
                  <th scope="col" className="px-6 py-4">
                    About
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Users
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Completion
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {userTransaction.map(
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
                )}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
