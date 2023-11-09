import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
    <Box className="form-row">
      <TextField
        id={name}
        name={name}
        value={value}
        label={labelText}
        variant="outlined"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Box>
  );
};

export default FormRow;
