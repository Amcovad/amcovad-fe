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
            ({ btnTitle, Icon, iconColor, color, title, url }, index) => (
              <CreateNewTransact
                btnTitle={btnTitle}
                Icon={Icon}
                iconColor={iconColor}
                color={color}
                title={title}
                url={url}
                key={index}
              />
            )
          )}
        </div>

        <div className="px-4 lg:px-0">
          <h2 className="pt-10 font-Inter text-xl lg:text-3xl font-bold text-neutral-black">
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
                {/* <tr className="bg-neutral-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4  text-sm inline-flex items-center gap-3 whitespace-nowrap "
                  >
                    <div className="min-w-[44px] min-h-[44px]">
                      <Image
                        className="rounded-full "
                        width={40}
                        height={40}
                        objectFit="cover"
                        src="/assets/dashboard/User-image1.jpg"
                        alt="user avatar"
                      />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium ">
                        Adams Olawale
                      </p>
                      <p className="text-gray-500 font-normal">@adams123</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-normal whitespace-nowrap">
                    <div>
                      <p className="text-gray-900">Loan Scheme</p>
                      <p className="text-gray-500 ">
                        We wish to use this loan template
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center -space-x-2">
                      {userAvatar[0].userImages.map((imagePath, index) => (
                        <span
                          key={index}
                          className="flex items-center justify-center border-2 rounded-full min-w-[28px] min-h-[28px]  z-10 hover:z-20 border-neutral-white"
                        >
                          <Image
                            className="m-auto rounded-full"
                            width={24}
                            height={24}
                            objectFit="cover"
                            src={imagePath}
                            alt="user avatar6"
                          />
                        </span>
                      ))}
                      <Link href="/app/admin/dashboard">
                        <p className="flex justify-center items-center w-8 h-8 min-w-[32px] min-h-[32px]  text-xs z-10 hover:z-20 font-semibold text-center text-purple-600 bg-purple-50 rounded-full border-2 border-neutral-white hover:bg-purple-100">
                          +5
                        </p>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="min-w-[150px]">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-purple-600 h-2.5 rounded-full"
                            style={{ width: "70%" }}
                          />
                        </div>
                        <span className="text-sm font-medium text-purple-700 dark:text-neutral-white">
                          70%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="cursor-pointer">
                      <Image
                        width="4"
                        height="16"
                        src="/assets/More.svg"
                        alt="action icon"
                      />
                    </span>
                  </td>
                </tr> */}

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
