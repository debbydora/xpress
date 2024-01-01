const Filter = ({ value, onChange, options }) => (
  <div className="bg-white w-[220px] px-3 py-[10px] rounded border border-[#EEE] text-sm">
    <select
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className="w-full bg-white outline-none px-3"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="!my-3">
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Filter;
