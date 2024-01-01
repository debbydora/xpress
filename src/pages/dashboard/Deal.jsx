import React from "react";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import Button from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import useDashboard from "./useDashboard";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

const Deal = () => {
  const {
    handleRowSelect,
    handleSelectAll,
    selectedRows,
    currentPage,
    totalPages,
    handlePageChange,
    rowsPerPage,
    handleRowsPerPageChange,
    rowsPerPageOptions,
    currentData,
    filter,
    searchTerm,
    handleFilterChange,
    handleSearchChange,
    filterOptions,
    pageNumbers,
  } = useDashboard();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full flex justify-between  h-[48px] items-center ">
        <div className="">
          <Filter
            value={filter}
            onChange={handleFilterChange}
            options={filterOptions}
          />
        </div>
        <div className="flex justify-between gap-4 ">
          <Search value={searchTerm} onChange={handleSearchChange} />
          <Button
            text="Add New Verifier"
            className="text-white bg-primary p-3 rounded text-[14px] flex items-center gap-2"
            icon={<FiPlus size={"24px"} />}
          />
        </div>
      </div>
      <div className="mt-10">
        <Table
          data={currentData}
          onSelectAll={handleSelectAll}
          onRowSelect={handleRowSelect}
          selectedRows={selectedRows}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPageOptions={rowsPerPageOptions}
          pageNumbers={pageNumbers}
        />
      </div>
    </div>
  );
};

export default Deal;
