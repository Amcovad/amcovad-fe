import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { getColor } from "@/utils/helper-functions";

type transactionRowType = {
  id: string;
  additionalUserImages?: string;
  // complection: string;
  // transactionDescription: string;
  transactionTitle: string;
  userAvatarUrl: string;
  userImages?: any;
  userName: string;
  type: string;
  firstName: string;
  lastName: string;
  participants: any;

  // userTag: string;
};
const TransactionRowCard = ({
  additionalUserImages,
  // complection,
  // transactionDescription,
  transactionTitle,
  participants,
  userAvatarUrl,
  userImages,
  userName,
  type,
  id,
  lastName,
  firstName,
}: // userTag,
transactionRowType) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  return (
    <tr className="bg-neutral-white hover:bg-gray-50 cursor-pointer border-b last-of-type:border-none">
      <th
        scope="row"
        className="px-6 py-4  text-sm inline-flex items-center gap-3 whitespace-nowrap "
      >
        <div className="min-w-[44px] min-h-[44px]">
          {/* <Image
            className="rounded-full "
            width={40}
            height={40}
            objectFit="cover"
            src={userAvatarUrl}
            alt="user avatar"
          /> */}
          <span
            className={classNames(
              "font-migra text-[#060809] font-extrabold w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
              getColor(firstName)
            )}
          >
            {firstName?.slice(0, 1).toUpperCase() +
              lastName?.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="text-gray-900 font-medium ">{userName}</p>
          {/* <p className="text-gray-500 font-normal">{userTag}</p> */}
        </div>
      </th>
      <td className="px-6 py-4 font-normal whitespace-nowrap">{type}</td>
      <td className="px-6 py-4 font-normal whitespace-nowrap">
        <div>
          <p className="text-gray-900">{transactionTitle}</p>
          {/* <p className="text-gray-500 ">{transactionDescription}</p> */}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center -space-x-2">
          {
            participants?.slice(0, 2)?.map((user: any, index: any) => (
              <div
                key={index}
                className="flex items-center justify-center border-2 rounded-full min-w-[28px] min-h-[28px] z-10 hover:z-20 border-neutral-white"
              >
                {user?.avatar ? (
                  <Image
                    className="m-auto rounded-full"
                    width={24}
                    height={24}
                    objectFit="cover"
                    src={""}
                    alt="user avatar6"
                  />
                ) : (
                  <span
                    className={classNames(
                      "font-migra text-[#060809] text-xs font-bold w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                      getColor(user?.firstName)
                    )}
                  >
                    {user ? (
                      <>
                        {user?.firstName?.slice(0, 1).toUpperCase() +
                          user?.lastName?.slice(0, 1).toUpperCase()}
                      </>
                    ) : null}
                  </span>
                )}
              </div>
            ))
            // : [
            //     "/assets/dashboard/user/user1.jpg",
            //     "/assets/dashboard/user/user1.jpg",
            //   ].map((imagePath: string, index: any) => (
            //     <div
            //       key={index}
            //       className="flex items-center justify-center border-2 rounded-full min-w-[28px] min-h-[28px] z-10 hover:z-20 border-neutral-white"
            //     >
            //       <Image
            //         className="m-auto rounded-full"
            //         width={24}
            //         height={24}
            //         objectFit="cover"
            //         src={imagePath}
            //         alt="user avatar6"
            //       />
            //     </div>
            //   ))
          }
          {participants.length > 2 && (
            <Link href="/app/admin/dashboard" legacyBehavior>
              <p className="flex justify-center items-center w-8 h-8 min-w-[32px] min-h-[32px]  text-xs z-10 hover:z-20 font-semibold text-center text-purple-600 bg-purple-50 rounded-full border-2 border-neutral-white hover:bg-purple-100">
                +{participants?.length - 2}
              </p>
            </Link>
          )}
        </div>
      </td>
      {/* <td className="px-6 py-4">
        <div className="min-w-[150px]">
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: `${complection}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-neutral-white">
              {complection}%
            </span>
          </div>
        </div>
      </td> */}
      <td className="px-6 py-4 text-right">
        <span
          className="cursor-pointer relative"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Image
            width="4"
            height="16"
            src="/assets/More.svg"
            alt="action icon"
          />
          {showDropdown && (
            <div className="absolute p-3 z-50 bg-white border-[1px] border-[#E6E6E6] right-0 top-full w-[141px] h-auto rounded-[8px] overflow-hidden flex flex-col gap-y-3">
              <div
                onClick={() => {
                  router.push(`/dashboard/transaction/${id}`);
                }}
                className="cursor-pointer flex gap-x-3 items-center"
              >
                View
              </div>
            </div>
          )}
        </span>
      </td>
    </tr>
  );
};

export default TransactionRowCard;
