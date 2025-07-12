
import React from "react";
import clsx from "clsx";

type Props = {
  status: string;
};

const StatusPill: React.FC<Props> = ({ status }) => {
  const baseClasses =
    "px-3 py-1 rounded-full text-xs font-medium inline-block whitespace-nowrap";

  const statusStyles: Record<string, string> = {
    "In-process": "bg-yellow-100 text-yellow-700",
    "Need to start": "bg-blue-100 text-blue-700",
    "Complete": "bg-green-100 text-green-700",
    "Blocked": "bg-red-100 text-red-700",
  };

  const fallback = "bg-gray-100 text-gray-600";

  return (
    <span
      className={clsx(baseClasses, statusStyles[status] || fallback)}
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
};

export default StatusPill;
