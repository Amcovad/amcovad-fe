import React from "react";

const TransactionLog = ({ phaseName, value }: any) => {
  if (phaseName === "creation" && value === "true")
    return <td className="text-left px-4 py-2">Created transaction</td>;

  if (phaseName === "lenderDecision" && value === "accept")
    return <td className="text-left px-4 py-2">Accepted transaction</td>;

  if (phaseName === "lenderDecision" && value === "reject")
    return <td className="text-left px-4 py-2">Rejected transaction</td>;

  if (phaseName === "witnessDecision" && value === "accept")
    return (
      <td className="text-left px-4 py-2">Accepted Witnessing transaction</td>
    );

  if (phaseName === "witnessDecision" && value === "reject")
    return (
      <td className="text-left px-4 py-2">Rejected Witnessing transaction</td>
    );

  return null;
};

export default TransactionLog;
