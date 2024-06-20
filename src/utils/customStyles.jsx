export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #6b7280",
    borderRadius: "0.375rem",
    paddingTop: "0.125rem",
    paddingBottom: "0.125rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    fontSize: "0.75rem",
    boxShadow: state.isFocused ? "0 0 0 0px rgba(216, 125, 74, 0.5)" : "none",
    "&:hover": {
      borderColor: "#d87d4a",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#d87d4a" : "transparent",
    color: state.isSelected ? "#FFFFFF" : "#000000",
    "&:hover": {
      backgroundColor: "#d87d4a",
      color: "#ffffff",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#f3f4f6",
    borderRadius: "0.375rem",
    marginTop: "0.25rem",
    // boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "#6b7280",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#d87d4a",
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#d87d4a" : "#6b7280",
    "&:hover": {
      color: "#d87d4a",
    },
  }),
};
