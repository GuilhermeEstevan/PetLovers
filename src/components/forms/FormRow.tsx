type TFormRow = {
  type: string;
  name: string;
  value: string;
  handleChange: (e: any) => void;
  labelText: string;
  placeholder?: string;
};

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
}: TFormRow) => {
  return (
    <div className="form-row">
      <label htmlFor="nome" className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className="form-input"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormRow;
