import React from "react";
import clsx from "clsx";

type Props = {
  status: string;
};

const StatusPill: React.FC<Props> = ({ status }) => {
  const baseStyle =
    "px-3 py-1 rounded-full text-xs font-medium inline-block w-fit";

  const statusStyles: Record<string, string> = {
    "In-process": "bg-yellow-100 text-yellow-700",
    "Need to start": "bg-blue-100 text-blue-700",
    Complete: "bg-green-100 text-green-700",
    Blocked: "bg-red-100 text-red-700",
  };

  return (
    <span className={clsx(baseStyle, statusStyles[status] || "bg-gray-100 text-gray-600")}>
      {status}
    </span>
  );
};

export default StatusPill;
