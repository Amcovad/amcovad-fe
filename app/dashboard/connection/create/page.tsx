"use client";
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Button from "@/components/form/Button";
import Link from "next/link";
import { SignInSchema } from "schema/authSchema";
import people from "@/data/dashboard/userData";
import { ArrowRight } from "iconsax-react";
import { newConnectionSchema } from "schema/connectionSchema";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import SingleCustomSelect from "@/components/inputs/SingleCustomSelect";
import { useRouter } from "next/router";
import userService from "../../../../services/user";
import connectionService from "../../../../services/connection";
import { useAppDispatch } from "../../../../redux/hooks";
import { useAppSelector } from "../../../../redux/hooks";
import { toast, ToastContainer } from "react-toastify";
import SelectRelationship from "@/components/inputs/SelectRelationship";
import SelectUser from "@/components/inputs/SelectUser";

function Dashboard() {
  // const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector((state) => state.auth.user);
  const [users, setUsers] = React.useState([]);

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(newConnectionSchema),
  });

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers();
        console.log(data);
        setUsers(
          data.filter((user: any) => {
            return user.role.id === 2 && user.id !== loggedInUser.id;
          })
        );
      } catch (error: any) {
        toast.error("Unable to fetch users list");
      }
    };

    fetchUsers();
  }, []);

  React.useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods, methods.formState.isSubmitSuccessful]);

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      await connectionService.add({ ...data, status: "pending" });
      toast.success("New connection request successfully sent");
      // dispatch(setBank(response.data));
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <DashboardLayout title="Add New Connection">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="space-y-3 lg:space-y-6">
              <div className="w-full lg:basis-1/2">
                <SelectUser name="connection" data={users} />
              </div>
              <div className="mt-4">
                <SelectRelationship name="relationship" />
              </div>
              <div className="mt-4">
                <Button size="lg">Send request</Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </DashboardLayout>
      <ToastContainer />
    </>
  );
}

export default Dashboard;
