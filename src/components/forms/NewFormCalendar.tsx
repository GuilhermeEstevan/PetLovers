import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography, Box } from "@mui/material";
import dayjs from "dayjs";
import { toDate } from "date-fns";
import { usePetContext } from "../../context/petContext";
dayjs.locale("pt-br");

type TFormCalendar = {
  setDate: (date: Date | null) => void;
  labelText: string;
  date: Date;
};

const NewFormCalendar = ({ date, setDate, labelText }: TFormCalendar) => {
  const [value, setValue] = useState<Dayjs | null>(date ? dayjs(date) : null);
  const { isEditing, editingCardInfo } = usePetContext();

  const handleChangeDate = (newDate: Dayjs | null) => {
    setDate(newDate ? toDate(newDate.toDate()) : null);
    setValue(newDate);
    console.log(newDate);
  };

  useEffect(() => {
    if (isEditing) {
      const editingDate = dayjs(editingCardInfo?.date, "DD/MM/YYYY");
      setValue(editingDate);
      console.log(editingDate);
    }
  }, [isEditing]);

  return (
    <div className="form-row calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <Box>
            <Typography variant="body2" sx={{ marginBottom: 2.32 }}></Typography>
            <DatePicker
              label={labelText}
              format="DD/MM/YYYY"
              value={date ? value : null}
              onChange={handleChangeDate}
              key={date ? value?.toString() : "null"}
            />
          </Box>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
export default NewFormCalendar;
