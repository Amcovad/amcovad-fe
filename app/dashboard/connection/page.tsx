"use client";
import React, { useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Button from "@/components/form/Button";
import Link from "next/link";
import connectionService from "../../../services/connection";
import { useAppDispatch } from "../../../redux/hooks";
import { useAppSelector } from "../../../redux/hooks";
import { toast, ToastContainer } from "react-toastify";
import NewFriendToast from "@/components/dashboard/component/NewFriendToast";
import classNames from "classnames";
import { getColor } from "@/utils/helper-functions";

function Dashboard() {
  const user = useAppSelector((state) => state.auth.user);
  const [acceptedConnections, setAcceptedConnections] = React.useState([]);
  const [pendingConnections, setPendingConnections] = React.useState([]);
  const dispatch = useAppDispatch();

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

  React.useEffect(() => {
    const fetchPendingConnections = async () => {
      try {
        const data = await connectionService.getPendingConnections();
        console.log(data);
        setPendingConnections(data);
      } catch (error: any) {
        toast.error("Unable to fetch connections list");
      }
    };

    fetchPendingConnections();
  }, []);

  return (
    <>
      <DashboardLayout title="Connections List">
        <div>
          <Link href={"/dashboard/connection/create"} legacyBehavior>
            <a>
              <Button color="primary" size="lg">
                Add new connection
              </Button>
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-y-3 mt-4">
          {pendingConnections.length !== 0
            ? pendingConnections
                .filter((conn: any) => conn.user.id !== user.id)
                .map((conn: any) => {
                  return (
                    <NewFriendToast
                      key={conn.id}
                      name={conn?.user?.firstName}
                      connectionId={conn.id}
                    />
                  );
                })
            : null}
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Connection Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Connection Relationship
                </th>

                {/* <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {acceptedConnections.length !== 0
                ? acceptedConnections.map((conn: any) => {
                    return (
                      <tr
                        key={conn.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">
                          {conn.user.id === user.id ? (
                            <div className="flex items-center gap-x-1">
                              <span
                                className={classNames(
                                  "text-[#060809] text-sm font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                                  getColor(conn?.user?.firstName)
                                )}
                              >
                                {conn.connection.firstName
                                  ?.slice(0, 1)
                                  .toUpperCase() +
                                  conn.connection.lastName
                                    ?.slice(0, 1)
                                    .toUpperCase()}
                              </span>
                              {conn.connection.firstName +
                                " " +
                                conn.connection.lastName}
                            </div>
                          ) : (
                            <div className="flex items-center gap-x-1">
                              <span
                                className={classNames(
                                  "text-[#060809] text-sm font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                                  getColor(conn?.user?.firstName)
                                )}
                              >
                                {conn.user.firstName
                                  ?.slice(0, 1)
                                  .toUpperCase() +
                                  conn.user.lastName?.slice(0, 1).toUpperCase()}
                              </span>
                              {conn.user.firstName + " " + conn.user.lastName}
                            </div>
                          )}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {conn.status}
                        </td>
                        <td className="px-6 py-4">{conn.relationship}</td>

                        {/*  <td className="px-6 py-4 text-right">
                          <a
                            // href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td> */}
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
