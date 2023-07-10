import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HookForm from "@/components/form/Form";
import { SignInSchema } from "schema/authSchema";
import Input from "@/components/form/Input";
import CustomSelect from "@/components/form/CustomSelect";
import people from "@/data/dashboard/userData";

function NewTransactions() {
  const [selected, setSelected] = useState(people[2]);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <DashboardLayout title="Lend Money to Connection">
        <div className="mt-8 px-4">
          <HookForm onSubmit={onSubmit} schema={SignInSchema}>
            <div className=" space-y-3 lg:space-y-6">
              <div>
                <Input
                  label="Transaction Name"
                  name="transaction"
                  placeholder="Enter your Transaction Name"
                  className="border"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-full lg:w-1/2">
                  <Input
                    label="Amount"
                    name="amount"
                    placeholder="Amount to Lend to Friend"
                    type="number"
                  />
                </div>
                <div className=" w-full lg:basis-1/2">
                  <CustomSelect
                    selected={selected}
                    setSelected={setSelected}
                    data={people}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-full lg:w-1/2">
                  <Input
                    label="Expected Date to Receive Money"
                    name="date-to-receive-money"
                    placeholder="Date to Receive Money"
                  />
                </div>
                <div className=" w-full lg:basis-1/2">
                  <Input
                    label="Expected Date of Return Money"
                    name="date-to-receive-money"
                    placeholder="Date to Return Payment"
                  />
                </div>
              </div>

              <div className="">
                <Input
                  label="Amount"
                  name="amount"
                  placeholder="Amount to Lend to Friend"
                  type="number"
                />
              </div>
            </div>
          </HookForm>
        </div>
      </DashboardLayout>
    </>
  );
}

export default NewTransactions;
