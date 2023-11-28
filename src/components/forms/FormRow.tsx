import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import { IconButton } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";

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
  // const [showPassword, setShowPassword] = useState(false);

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

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
        style={{ width: "100%" }}
        // InputProps={
        //   type === "password"
        //     ? {
        //         endAdornment: (
        //           <InputAdornment position="end">
        //             <IconButton
        //               aria-label="toggle password visibility"
        //               onClick={toggleShowPassword}
        //               onMouseDown={(e) => e.preventDefault()}
        //             >
        //               {showPassword ? <IoEyeOff /> : <IoEye />}
        //             </IconButton>
        //           </InputAdornment>
        //         ),
        //       }
        //     : undefined
        // }
      />
    </Box>
  );
};

export default FormRow;
