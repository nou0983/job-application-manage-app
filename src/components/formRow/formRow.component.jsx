const FormRow = ({ text, type, name, value, handleChange }) => {
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
      />
    </div>
  );
};

export default FormRow;
