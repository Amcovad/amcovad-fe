import Input from "@/components/form/Input";
import { InfoCircle } from "iconsax-react";
import React from "react";

type Content = {
  [key: string]: React.ReactNode;
};

// date: "You will be returning the total of ₦ 900,000 on the 25th November 2022",
const alertEventData = [
  {
    title: "One Off",
    amount: "900,000",
    date: "25th November 2022",
  },
  {
    title: "Daily",
    amount: "150,000",
    every: "2 days",
    date: "30th May 2023",
  },
  {
    title: "Weekly",
    amount: "200,000",
    every: "Sunday",
    date: "30th May 2023",
  },
  {
    title: "Monthly",
    amount: "300,000",
    every: "17th of every month",
    date: "17th May 2023",
  },
  {
    title: "Yearly",
    amount: "500,000",
    every: "17th of April every year",
    date: "17th May 2024",
  },
];

const AlertInfo = ({
  title,
  amount,
  every,
  date,
}: {
  title: string;
  amount: string;
  every?: string;
  date: string;
}) => {
  return (
    <div
      className="p-4 mb-4  border border-info-100 rounded bg-info-25 mt-4"
      role="alert"
    >
      <div>
        <div className="flex items-center gap-2">
          <InfoCircle size="14" color="#019db2" />
          <span className="sr-only">Info</span>
          <p className="text-sm font-bold text-info-700">
            {title} Payment Breakdown
          </p>
        </div>
        <p className="mt-2 mb-3 text-sm text-primary-800">
          You will be paying an average of{" "}
          <span className="font-bold">₦ {amount}</span> every{" "}
          {every && <span className="font-bold">{every}</span>} starting from{" "}
          <span className="font-bold">{date}</span>.
        </p>
      </div>
    </div>
  );
};

export const oneOff = (
  <>
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className=" w-full lg:basis-1/2">
        <Input
          label="Select Day of the Year"
          name="oneOff"
          placeholder="17th April, 2024)"
        />
      </div>
    </div>

    {alertEventData[0] && (
      <AlertInfo
        key={0}
        title={alertEventData[0].title}
        amount={alertEventData[0].amount}
        date={alertEventData[0].date}
        every={alertEventData[0].every}
      />
    )}
  </>
);
export const indays = (
  <>
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className="w-full lg:w-1/2">
        <Input label="Every" name="every-day" placeholder="2 Days" />
      </div>
      <div className=" w-full lg:basis-1/2">
        <Input
          label="Starting From"
          name="starting-from"
          placeholder="in 2 days time (30th May, 2023)"
        />
      </div>
    </div>
    {/* <AlertInfo data={alertEventData[1]} /> */}
    {alertEventData[1] && (
      <AlertInfo
        key={1}
        title={alertEventData[1].title}
        amount={alertEventData[1].amount}
        date={alertEventData[1].date}
        every={alertEventData[1].every}
      />
    )}
  </>
);
export const weekly = (
  <>
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className="w-full lg:w-1/2">
        <Input label="Every" name="every-week" placeholder="2 Weeks" />
      </div>
      <div className=" w-full lg:basis-1/2">
        <Input
          label="Select Day of the Week"
          name="every-week"
          placeholder="Every Sunday"
        />
      </div>
    </div>
    {alertEventData[2] && (
      <AlertInfo
        key={2}
        title={alertEventData[2].title}
        amount={alertEventData[2].amount}
        date={alertEventData[2].date}
        every={alertEventData[2].every}
      />
    )}
  </>
);
export const monthly = (
  <>
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className="w-full lg:w-1/2">
        <Input label="Every" name="every-month" placeholder="2 Months" />
      </div>
      <div className=" w-full lg:basis-1/2">
        <Input
          label="Select Day of the Month"
          name="every-week"
          placeholder="17th of Every Month"
        />
      </div>
    </div>
    {alertEventData[3] && (
      <AlertInfo
        key={3}
        title={alertEventData[3].title}
        amount={alertEventData[3].amount}
        date={alertEventData[3].date}
        every={alertEventData[3].every}
      />
    )}
  </>
);

export const yearly = (
  <>
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className=" w-full lg:basis-1/2">
        <Input
          label="Select Day of the Year"
          name="yearly"
          placeholder="17th April, 2024)"
        />
      </div>
    </div>
    {alertEventData[4] && (
      <AlertInfo
        key={4}
        title={alertEventData[4].title}
        amount={alertEventData[4].amount}
        date={alertEventData[4].date}
        every={alertEventData[4].every}
      />
    )}
  </>
);

const repaymentPlan: Content = {
  "One Off": oneOff,
  "In Days": indays,
  Weekly: weekly,
  Monthly: monthly,
  Yearly: yearly,
};

export default repaymentPlan;
