import React, { useState } from "react";
import { tableData } from "../../utils/data";

const useDashboard = () => {
  const rowsPerPageOptions = [5, 10, 15, 20];

  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[3]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filterOptions = [
    { value: "All", label: "All" },
    { value: "Active", label: "Active Verifiers" },
    { value: "awaiting approval", label: "Pending Verifiers" },
    { value: "Deactivated", label: "Deactivated Verifiers" },
  ];

  const handleSelectAll = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map((row) => row.id));
    }
  };

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Filter and search logic
  const filteredData = tableData.filter((item) => {
    const lowerCaseFilter = filter.toLowerCase();
    const lowerCaseStatus = item.status.toLowerCase();

    const matchesStatus =
      lowerCaseFilter === "all" || lowerCaseStatus === lowerCaseFilter;
    const matchesSearch =
      searchTerm === "" ||
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase())||
      item.phoneNumber.includes(searchTerm) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  //PAGINATION

  // Calculate total pages and current data
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  const generatePageNumbers = (current, total, window = 2) => {
    const start = Math.max(current - window, 1);
    const end = Math.min(current + window, total);

    let pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (newValue) => {
    setFilter(newValue);
    setCurrentPage(1);
  };

  return {
    tableData,
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
  };
};

export default useDashboard;
