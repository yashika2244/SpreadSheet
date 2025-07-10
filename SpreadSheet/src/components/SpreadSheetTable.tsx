

import StatusPill from "./StatusPill";
import AvatarGroup from "./AvatarGroup";

const rows = [
   {
    job: "Launch social media campaign for product",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: ["Sophie Choudhury"],
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    job: "Update press kit for company redesign",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanportfolio.com",
    assigned: ["Tejas Pandey"],
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    job: "Finalize user testing feedback for app",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.dev",
    assigned: ["Rachel Lee"],
    priority: "Medium",
    due: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    job: "Design new features for the website",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.me",
    assigned: ["Tom Wright"],
    priority: "Low",
    due: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    job: "Prepare financial report for Q4",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: ["Kevin Smith"],
    priority: "Low",
    due: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

const SpreadsheetTable = () => {
  return (
    <div className="bg-white px-2 sm:px-6 py-4 w-full">
      <div className="w-full overflow-x-auto border border-gray-100 rounded-lg">
        <table className="min-w-[1000px] w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-100">
              {[
                "#",
                "Job Request",
                "Submitted",
                "Status",
                "Submitter",
                "URL",
                "Assigned",
                "Priority",
                "Due Date",
                "Est. Value",
              ].map((heading, idx) => (
                <th
                  key={idx}
                  className="border border-gray-100 px-3 py-2 font-semibold text-gray-700 text-left whitespace-nowrap"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="border border-gray-100 px-3 py-1 text-center text-gray-500 font-medium">
                  {idx + 1}
                </td>
                <td className="border border-gray-100 px-3 py-1 text-gray-700 whitespace-nowrap">
                  {row.job.length > 40 ? row.job.slice(0, 40) + "..." : row.job}
                </td>
                <td className="border border-gray-100 px-3 py-1 text-gray-600 whitespace-nowrap">
                  05-12-2024
                </td>
                <td className="border border-gray-100 px-3 py-1">
                  <StatusPill status={row.status} />
                </td>
                <td className="border border-gray-100 px-3 py-1 text-gray-600 whitespace-nowrap">
                  {row.submitter}
                </td>
                <td className="border border-gray-100 px-3 py-1 text-blue-600 underline cursor-pointer whitespace-nowrap">
                  {row.url}
                </td>
                <td className="border border-gray-100 px-3 py-1">
                  <AvatarGroup users={row.assigned} />
                </td>
                <td className="border border-gray-100 px-3 py-1">
                  <span
                    className={`px-2 py-0.5 rounded-full  text-xs font-semibold ${
                      row.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : row.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-200 text-blue-800"
                    }`}
                  >
                    {row.priority}
                  </span>
                </td>
                <td className="border border-gray-100 px-3 py-1 text-gray-600 whitespace-nowrap">
                  {row.due}
                </td>
                <td className="border border-gray-100 px-3 py-1 text-right font-medium text-gray-800 whitespace-nowrap">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpreadsheetTable;
