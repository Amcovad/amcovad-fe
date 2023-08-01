"use client";
import React, { useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Button from "@/components/form/Button";
import Link from "next/link";
import bankService from "../../../services/bank";
import { useAppDispatch } from "../../../redux/hooks";
import { useAppSelector } from "../../../redux/hooks";
import { setBank } from "../../../redux/slices/bank";
import { toast, ToastContainer } from "react-toastify";

function Dashboard() {
  const banks = useAppSelector((state) => state.bank.banks);
  const dispatch = useAppDispatch();

  console.log(banks);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await bankService.getBanks();

        dispatch(setBank(response));
      } catch (error: any) {
        toast.error("Unable to fetch banks list");
      }
    };

    fetchBanks();
  }, []);

  return (
    <>
      <DashboardLayout title="Banks List">
        <div>
          <Link href={"/dashboard/bank/create"} legacyBehavior>
            <a>
              <Button color="primary" size="lg">
                Add new bank
              </Button>
            </a>
          </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Bank name
                </th>
                <th scope="col" className="px-6 py-3">
                  Account name
                </th>
                <th scope="col" className="px-6 py-3">
                  Account number
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {banks.length !== 0
                ? banks.map((bank: any) => {
                    return (
                      <tr
                        key={bank.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {bank.name}
                        </th>
                        <td className="px-6 py-4">{bank.accountName}</td>
                        <td className="px-6 py-4">{bank.accountNumber}</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            // href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })
                : null}
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  GT Bank
                </th>
                <td className="px-6 py-4">Balogun Abdulganiyyr</td>
                <td className="px-6 py-4">0138979979</td>
                <td className="px-6 py-4 text-right">
                  <a
                    // href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
      <ToastContainer />
    </>
  );
}

export default Dashboard;
