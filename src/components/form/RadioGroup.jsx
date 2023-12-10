const RadioGroup = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="form-group m-3 relative flex flex-col gap-2 ">
      <label htmlFor="option" className="block">
        {label}:
      </label>
      <div className="flex gap-5">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex flex-col justify-center items-center">
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
