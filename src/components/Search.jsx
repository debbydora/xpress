import searchIcon from "../icons/search.svg";
const Search = ({ value, onChange }) => (
  <div className="bg-white p-3 rounded border border-[#EEE] flex gap-x-2 items-center">
    <img src={searchIcon} alt="search" />
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="outline-none text-xs"
      placeholder="Name/Phone No/location"
    />
  </div>
);

export default Search;
