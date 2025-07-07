

import React from "react";
import { useTable } from "react-table";

type Person = {
  name: string;
  role: string;
  status: "Active" | "Inactive";
};

const data: Person[] = [
  { name: "Alice", role: "Engineer", status: "Active" },
  { name: "Bob", role: "Designer", status: "Inactive" },
  { name: "Charlie", role: "Manager", status: "Active" },
];

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }: { value: Person["status"] }) => (
      <span
        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
          value === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {value}
      </span>
    ),
  },
] as const;

const SpreadsheetTable: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table
        {...getTableProps()}
        className="w-full table-auto border-collapse text-sm sm:text-base"
      >
        <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 sticky top-0 z-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-3 text-left font-medium tracking-wide border-b border-gray-300"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition duration-200`}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-3 border-b border-gray-200 text-gray-800 whitespace-nowrap"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;
