import React from "react";
import { TfiMore } from "react-icons/tfi";

const Table = ({ data, onSelectAll, onRowSelect, selectedRows }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y bg-white divide-[#EBEFF2] shadow-custom-light rounded-t-[10px]">
      <thead className=" text-left text-sm font-bold text-textBlack capitalize tracking-wider">
        <tr>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
              onChange={onSelectAll}
              checked={data.length > 0 && selectedRows.length === data.length}
            />
          </th>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">
            First Name
          </th>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">
            Last Name
          </th>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">
            Phone Number
          </th>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">
            Partner
          </th>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">
            Location
          </th>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">Status</th>
          <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-[#EBEFF2] whitespace-nowrap text-sm text-textBlack capitalize">
        {data.map((row) => (
          <tr key={row.id}>
            <td className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-primary"
                checked={selectedRows.includes(row.id)}
                onChange={() => onRowSelect(row.id)}
              />
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
              {row.firstName}
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
              {row.lastName}
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
              {formatPhoneNumber(row.phoneNumber)}
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">
              {row.partner}
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3">
              {row.location}
            </td>
            <td
              className={`px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 whitespace-nowrap`}
            >
              <p
                className={`rounded-lg px-2 py-1 ${getStatusClasses(
                  row.status
                )} `}
              >
                {row.status}
              </p>
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 ">
              {<TfiMore size="20px" />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Helper function to format the phone number
const formatPhoneNumber = (phoneNumber) => {
  return `+234 ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(
    4,
    7
  )} ${phoneNumber.slice(7)}`;
};

const statusStyles = {
  active: "text-[#27A713] bg-lightGreen",
  "awaiting approval": "text-pendingYellow bg-lightYellow",
  deactivated: "text-[#FF0000] bg-lightRed",
};

const getStatusClasses = (status) => {
  const lowerCaseStatus = status.toLowerCase();
  return statusStyles[lowerCaseStatus] || "text-gray-500 bg-white";
};

export default Table;
