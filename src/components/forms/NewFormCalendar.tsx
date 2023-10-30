import { useState } from "react";
import { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs"; // Importe dayjs corretamente
import { toDate } from "date-fns";
dayjs.locale("pt-br");

type TFormCalendar = {
  setDate: (date: Date | null) => void;
  labelText: string;
};

const NewFormCalendar = ({ setDate, labelText }: TFormCalendar) => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleChangeDate = (date: Dayjs | null) => {
    setDate(date ? toDate(date.toDate()) : null);
    setValue(date);
    console.log(date);
  };

  return (
    <div className="form-row">
      <label>{labelText}</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker value={value} onChange={handleChangeDate} />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
export default NewFormCalendar;
