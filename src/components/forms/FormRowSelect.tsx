type TformRowSelect = {
  name: string;
  value: string;
  handleChange: (e: any) => any;
  labelText?: string;
  list: string[];
};

const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
}: TformRowSelect) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {list.map((option, index) => {
          return (
            <option key={index} value={option} className="select-option">
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
