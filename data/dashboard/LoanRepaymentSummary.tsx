import React from "react";
import { InfoCircle } from "iconsax-react";

interface RepaymentSummaryProps {
  loanAmount: number;
  repaymentAmount: number;
  startDate: string;
  frequency: "days" | "weeks" | "months" | "years";
  frequencyValue: number;
  isOneOffPayment?: boolean;
  period: string;
}

const LoanRepaymentSummary: React.FC<RepaymentSummaryProps> = ({
  loanAmount,
  repaymentAmount,
  startDate,
  frequency,
  frequencyValue,
  period,
  isOneOffPayment = false,
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
            {period.charAt(0).toUpperCase() + period.slice(1)} Payment Breakdown
          </p>
        </div>
        {isOneOffPayment === true ? (
          <p className="mt-2 mb-3 text-sm text-primary-800">
            You will be paying a total of{" "}
            <span className="font-bold">₦{loanAmount}</span> on{" "}
            <span className="font-bold">{startDate}</span>.
          </p>
        ) : (
          <p className="mt-2 mb-3 text-sm text-primary-800">
            You will be paying an average of{" "}
            <span className="font-bold">₦{repaymentAmount}</span> every{" "}
            {frequencyValue && (
              <span className="font-bold">{frequencyValue}</span>
            )}{" "}
            {frequency} starting from{" "}
            <span className="font-bold">{startDate}</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoanRepaymentSummary;

{
  /* <div
className="p-4 mb-4  border border-info-100 rounded bg-info-25 mt-4"
role="alert"
>
<div>
  <div className="flex items-center gap-2">
    <InfoCircle size="14" color="#019db2" />
    <span className="sr-only">Info</span>
    <p className="text-sm font-bold text-info-700">
      {period.charAt(0).toUpperCase() +
        period.slice(1)}{" "}
      Payment Breakdown
    </p>
  </div>
  {period === "oneoff" ? (
    <p className="mt-2 mb-3 text-sm text-primary-800">
      You will be paying a total of{" "}
      <span className="font-bold">
        ₦{breakdownAmount}
      </span>{" "}
      on{" "}
      <span className="font-bold">
        {startingDate}
      </span>
      .
    </p>
  ) : (
    <p className="mt-2 mb-3 text-sm text-primary-800">
      You will be paying an average of{" "}
      <span className="font-bold">
        ₦{breakdownAmount}
      </span>{" "}
      every{" "}
      {periodTimes && (
        <span className="font-bold">
          {periodTimes}
        </span>
      )}{" "}
      {repaymentPlan[period]} starting from{" "}
      <span className="font-bold">
        {startingDate}
      </span>
      .
    </p>
  )}
</div>
</div> */
}
