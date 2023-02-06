const FormRow = ({ text, type, name, value, handleChange, disabled }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {text || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        className="form-input"
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

export default FormRow;
