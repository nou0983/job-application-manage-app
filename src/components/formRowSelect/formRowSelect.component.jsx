import Wrapper from "./formRowSelect.styles";

const FormRowSelect = ({
  options,
  text,
  name,
  value,
  handleChange,
  disabled,
}) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor={name} className="form-label">
        {text || name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        className="form-input"
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default FormRowSelect;
