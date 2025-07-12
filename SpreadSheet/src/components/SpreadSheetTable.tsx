import StatusPill from "./StatusPill";
import AvatarGroup from "./AvatarGroup";

const rows = [
  {
    job: "Launch social media campaign for product",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "https://www.aishapatel.com",
    assigned: ["Sophie Choudhury"],
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    job: "Update press kit for company redesign",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "https://www.irfankhanportfolio.com",
    assigned: ["Tejas Pandey"],
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    job: "Finalize user testing feedback for app",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "https://www.markjohnson.dev",
    assigned: ["Rachel Lee"],
    priority: "Medium",
    due: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    job: "Design new features for the website",
    status: "Complete",
    submitter: "Emily Green",
    url: "https://www.emilygreen.me",
    assigned: ["Tom Wright"],
    priority: "Low",
    due: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    job: "Prepare financial report for Q4",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "https://www.jessicabrown.com",
    assigned: ["Kevin Smith"],
    priority: "Low",
    due: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

const SpreadsheetTable = () => {
  return (
    <div className="bg-white px-4 sm:px-6 py-6 w-full">
      <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="min-w-[1000px] w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-left shadow-sm">
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
                  className={`px-4 py-1 font-semibold whitespace-nowrap border border-gray-200 ${
                    idx === 0 ? "rounded-tl-2xl" : idx === 9 ? "rounded-tr-2xl" : ""
                  }`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition`}
              >
                <td className="px-4 md:py-1  border border-gray-200 text-center text-gray-500 font-medium">
                  {idx + 1}
                </td>
                <td className="px-4 md:py-1  border border-gray-200 text-gray-800 max-w-[220px] truncate">
                  {row.job}
                </td>
                <td className="px-4 md:py--1 border border-gray-200 text-gray-600 whitespace-nowrap">
                  05-12-2024
                </td>
                <td className="px-4 md:py-1 border border-gray-200">
                  <StatusPill status={row.status} />
                </td>
                <td className="px-4 md:py-1 border border-gray-200 text-gray-600 whitespace-nowrap">
                  {row.submitter}
                </td>
                <td className="px-4 md:py-1 border border-gray-200 text-blue-600 underline whitespace-nowrap">
                  <a href={row.url} target="_blank" rel="noopener noreferrer">
                    {new URL(row.url).hostname}
                  </a>
                </td>
                <td className="px-4 py-1 border border-gray-200">
                  <AvatarGroup users={row.assigned} />
                </td>
                <td className="px-4 py-1 border border-gray-200">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      row.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : row.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {row.priority}
                  </span>
                </td>
                <td className="px-4 py-1 border border-gray-200 text-gray-600 whitespace-nowrap">
                  {row.due}
                </td>
                <td className="px-4 py-1  border border-gray-200 text-right font-medium text-gray-800 whitespace-nowrap">
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
