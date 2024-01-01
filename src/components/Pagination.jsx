const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  rowsPerPageOptions,
  pageNumbers,
}) => (
  <div className="flex justify-between items-center w-full bg-white px-6 py-6 border-t border-[#EBEFF2]">
    {/* Rows Per Page Selection */}
    <div className="flex items-center gap-x-4">
      <label htmlFor="rowsPerPage" className="text-[#808080] text-xs ">
        Rows per page
      </label>
      <select
        id="rowsPerPage"
        value={rowsPerPage}
        onChange={onRowsPerPageChange}
        className="border border-[#C4C4C4] rounded bg-white px-3 py-1 outline-none text-xs"
      >
        {rowsPerPageOptions.map((option) => (
          <option key={option} value={option} className="text-xs">
            {option}
          </option>
        ))}
      </select>
    </div>

    {/* Pagination Controls */}
    <div className="flex items-center gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={` text-xs ${
          currentPage === 1
            ? "text-[#808080] cursor-not-allowed"
            : "text-primary cursor-pointer"
        }`}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={
            currentPage === number ? "text-primary cursor-not-allowed" : ""
          }
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={` text-xs ${
          currentPage === totalPages
            ? "text-[#808080] cursor-not-allowed"
            : "text-primary cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  </div>
);

export default Pagination;
