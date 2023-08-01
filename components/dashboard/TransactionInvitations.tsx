import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import sidebarData from "@/data/dashboard/sidebar";
import Logo from "@/public/assets/logo/logo.svg";
import { Setting2, Notepad2 } from "iconsax-react";
import { XIcon } from "@/public/assets/dashboard/navBarIcon";
import { ToastContainer, toast } from "react-toastify";
import transactionService from "../../services/transaction";
import Button from "../form/Button";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { getColor } from "@/utils/helper-functions";

const TransactionInvitations = () => {
  const [Invitations, setInvitations] = useState([]);
  const router = useRouter();

  React.useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await transactionService.getTransactionInvitations();
        console.log(data);
        setInvitations(data.invitations);
      } catch (error: any) {
        toast.error("Unable to fetch transactions list");
      }
    };

    fetchTransactions();
  }, []);

  if (!Invitations.length) {
    return null;
  }

  return (
    <div className="border-[1px] border-[#E6E8EA] rounded-[6px]">
      <div className="flex justify-between items-center p-3 border-b-[1px] border-gray-300">
        <span className="text-[#344055] font-semibold leading-[24px]">
          Transaction Invitations
        </span>
        <span className="text-[#01B3F8] text-[9px] font-bold leading-[18px]">
          See all{"("}25{")"}
        </span>
      </div>
      {Invitations.length !== 0
        ? Invitations.map((invitation: any, i: number) => {
            return (
              <div
                key={i}
                className="flex justify-between items-center p-3 border-b-[1px] border-gray-300"
              >
                <div className="flex items-center ">
                  <div className="inline-block relative shrink-0">
                    {invitation?.user?.avatar ? (
                      <Image
                        className="w-10 h-10 rounded-full"
                        src="/assets/dashboard/User-Jumoke.jpg"
                        width={40}
                        height={40}
                        objectFit="cover"
                        alt="user image"
                      />
                    ) : (
                      <span
                        className={classNames(
                          "font-migra text-[#060809] text-xs font-bold w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                          getColor(invitation?.user?.firstName)
                        )}
                      >
                        {invitation?.user?.firstName
                          ?.slice(0, 1)
                          .toUpperCase() +
                          invitation?.user?.lastName?.slice(0, 1).toUpperCase()}
                      </span>
                    )}

                    <span className="inline-flex absolute right-0 bottom-1 border border-neutral-white justify-center items-center w-3 h-3 bg-green-600 rounded-full">
                      <span className="sr-only">active user</span>
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-Inter text-secondary-800">
                      {invitation?.user?.firstName +
                        " " +
                        invitation?.user?.lastName}{" "}
                      has invited you to{" "}
                      {invitation?.desc === "lenderDecision"
                        ? "accept"
                        : "witness"}{" "}
                      his transaction
                      {/* {name} wants to join your network{" "} */}
                    </p>
                    <p className="flex gap-x-1 items-center">
                      <span>
                        <Notepad2 size="12" color="#777F8D" />
                      </span>
                      <span>{invitation?.details?.name}</span> ||{" "}
                      <span>{invitation?.type} Transaction</span>
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      if (invitation?.desc === "witnessDecision") {
                        router.push(
                          `/dashboard/transaction/${invitation?.id}?phaseName=witnessDecision`
                        );
                      } else {
                        router.push(`/dashboard/transaction/${invitation?.id}`);
                      }
                    }}
                    color="neutral-light"
                    size="xs"
                    className="bg-[#F5F6F8]"
                  >
                    Decline
                  </Button>
                  <Button
                    onClick={() => {
                      if (invitation?.desc === "witnessDecision") {
                        router.push(
                          `/dashboard/transaction/${invitation?.id}?phaseName=witnessDecision`
                        );
                      } else {
                        router.push(`/dashboard/transaction/${invitation?.id}`);
                      }
                    }}
                    className={`ml-1 ${
                      invitation?.desc === "lenderDecision"
                        ? ""
                        : "bg-[#344055]"
                    }`}
                    size="xs"
                  >
                    {invitation?.desc === "lenderDecision"
                      ? "Accept"
                      : "Witness"}
                    Transaction
                  </Button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TransactionInvitations;
