import React from "react";
import { twMerge } from "tailwind-merge";

interface RepaymentScheduleProps {
  loanAmount: number;
  repaymentAmount: number;
  startDate: string;
  frequency: "days" | "weeks" | "months" | "years";
  frequencyValue: number;
  isOneOffPayment?: boolean;
}

const LoanRepaymentSchedule: React.FC<RepaymentScheduleProps> = ({
  loanAmount,
  repaymentAmount,
  startDate,
  frequency,
  frequencyValue,
  isOneOffPayment = false,
}) => {
  const repaymentSchedule = [];

  let remainingAmount = loanAmount;
  let currentDate = new Date(startDate);

  const frequencyInDays = {
    days: 1,
    weeks: 7,
    months: 30, // assuming an average month length of 30 days
    years: 365, // assuming a year has 365 days
  };

  const daysInFrequency = frequencyInDays[frequency] * frequencyValue;

  if (isOneOffPayment) {
    repaymentSchedule.push({
      date: currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      amount: loanAmount,
    });
  } else {
    while (remainingAmount > 0) {
      const repaymentDate = new Date(currentDate);
      repaymentDate.setDate(repaymentDate.getDate() + daysInFrequency);

      const actualRepaymentAmount =
        remainingAmount >= repaymentAmount ? repaymentAmount : remainingAmount;

      repaymentSchedule.push({
        date: repaymentDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        amount: actualRepaymentAmount,
      });

      remainingAmount -= actualRepaymentAmount;
      currentDate = repaymentDate;
    }
  }

  return (
    <>
      <div className="overflow-x-auto border-2 border-gray-200 rounded-lg">
        <table className="min-w-full rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                S/N
              </th>
              <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                Date
              </th>
              <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                Amount
              </th>
              <th className="text-left px-4 border-b-2 border-gray-200 py-2">
                Status
              </th>
              <th className="text-left px-4 border-b-2 border-gray-200 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {repaymentSchedule.map((repayment, index) => (
              <tr className="bg-white" key={index}>
                <td className="text-left px-4 border-b border-gray-300 py-2">
                  {index + 1}
                </td>
                <td className="text-left px-4 border-b border-gray-300 py-2">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(repayment.date))}
                </td>
                <td className="text-left px-4 border-b border-gray-300 py-2">
                  {repayment.amount}
                </td>
                <td className="text-left px-4 border-b border-gray-300 py-2">
                  <div
                    className={twMerge(
                      `flex gap-x-2 items-center bg-[#ECFDF3] w-[75px] h-[22px] text-[#039855] rounded-[20px] py-1 px-1`,
                      "bg-success-50 text-success-700"
                    )}
                  >
                    <span
                      className={twMerge(
                        `inline-block w-[6px] h-[6px] bg-[#039855] rounded-full flex justify-center items-center`,
                        "bg-success-700"
                      )}
                    ></span>
                    <div>Editable</div>
                  </div>
                </td>
                <td className="text-left px-4 border-b border-gray-300 py-2">
                  <button className="bg-primary-50 text-primary-500 font-bold py-2 px-4 rounded w-[85px]">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
            <tr className="bg-white">
              <td className="text-left px-4 py-3">Total</td>
              <td className="text-left px-4 py-3"></td>
              <td className="text-left font-bold text-[32px] leading-[20px] text-primary-900 px-4 py-3">
                ₦ {loanAmount}
              </td>
              <td className="text-left px-4 py-3"></td>
              <td className="text-left px-4 py-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LoanRepaymentSchedule;
