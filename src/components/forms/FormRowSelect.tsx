import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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
    <Box className="form-select">
      <TextField
        name={name}
        id={name}
        select
        label={labelText}
        value={value}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      >
        {list.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
export default FormRowSelect;
