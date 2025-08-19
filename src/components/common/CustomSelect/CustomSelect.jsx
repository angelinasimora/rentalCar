import Select from "react-select";

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  inputId,
  name,
  prefix,
}) {
  const customStyles = {
    control: (base) => ({
      ...base,
      width: 196,
      height: 44,
      border: "none",
      background: "var(--inputs)",
      color: "var(--color-black)",
      paddingLeft: prefix ? "8px" : "0",
    }),
    placeholder: (base) => ({
      ...base,
      color: "black",
    }),
  };

  return (
    <Select
      inputId={inputId}
      name={name}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      styles={customStyles}
    />
  );
}
