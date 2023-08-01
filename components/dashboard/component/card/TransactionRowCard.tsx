import Image from "next/image";
import Link from "next/link";
import React from "react";

type transactionRowType = {
  additionalUserImages?: string;
  complection: string;
  transactionDescription: string;
  transactionTitle: string;
  userAvatarUrl: string;
  userImages: any;
  userName: string;
  userTag: string;
};
const TransactionRowCard = ({
  additionalUserImages,
  complection,
  transactionDescription,
  transactionTitle,
  userAvatarUrl,
  userImages,
  userName,
  userTag,
}: transactionRowType) => {
  return (
    <tr className="bg-neutral-white hover:bg-gray-50 cursor-pointer border-b last-of-type:border-none">
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
            src={userAvatarUrl}
            alt="user avatar"
          />
        </div>
        <div>
          <p className="text-gray-900 font-medium ">{userName}</p>
          <p className="text-gray-500 font-normal">{userTag}</p>
        </div>
      </th>
      <td className="px-6 py-4 font-normal whitespace-nowrap">
        <div>
          <p className="text-gray-900">{transactionTitle}</p>
          <p className="text-gray-500 ">{transactionDescription}</p>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center -space-x-2">
          {userImages.map((imagePath: string, index: any) => (
            <div
              key={index}
              className="flex items-center justify-center border-2 rounded-full min-w-[28px] min-h-[28px] z-10 hover:z-20 border-neutral-white"
            >
              <Image
                className="m-auto rounded-full"
                width={24}
                height={24}
                objectFit="cover"
                src={imagePath}
                alt="user avatar6"
              />
            </div>
          ))}
          {additionalUserImages && (
            <Link href="/app/admin/dashboard">
              <p className="flex justify-center items-center w-8 h-8 min-w-[32px] min-h-[32px]  text-xs z-10 hover:z-20 font-semibold text-center text-purple-600 bg-purple-50 rounded-full border-2 border-neutral-white hover:bg-purple-100">
                +{additionalUserImages}
              </p>
            </Link>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
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
    </tr>
  );
};

export default TransactionRowCard;
