import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography, Box } from "@mui/material";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import { usePetContext } from "../../context/petContext";

dayjs.locale("pt-br");

type TFormCalendar = {
  setDate: (date: string | null) => void;
  labelText: string;
  date: string | null;
};

const NewFormCalendar = ({ date, setDate, labelText }: TFormCalendar) => {
  const [value, setValue] = useState<Dayjs | null>(date ? dayjs(date) : null);
  const { isEditing, editingCardInfo, singlePet } = usePetContext();

  const handleChangeDate = (newDate: Dayjs | null) => {
    const dateString = newDate ? newDate.format("DD/MM/YYYY") : null;
    setDate(dateString);
    setValue(newDate);
  };

  useEffect(() => {
    if (isEditing) {
      const editingDate = dayjs(editingCardInfo?.date, "DD/MM/YYYY");
      setValue(editingDate);
    }
  }, [isEditing]);

  // Definição de data para perfil do pet
  useEffect(() => {
    if (singlePet?.birthday) {
      setValue(dayjs(singlePet.birthday, "YYYY/MM/DD"));
    }
  }, [singlePet]);

  return (
    <div className="form-row calendar">
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="pt-BR"
        localeText={
          ptBR.components.MuiLocalizationProvider.defaultProps.localeText
        }
        // localeText={{ cancelButtonLabel: "cancelar", datePickerToolbarTitle:"Data" }}
      >
        <DemoContainer components={["DatePicker"]}>
          <Box>
            <Typography
              variant="body2"
              sx={{ marginBottom: 2.32 }}
            ></Typography>
            <DatePicker
              sx={{ width: "15rem" }}
              label={labelText}
              format="DD/MM/YYYY"
              value={date ? value : null}
              closeOnSelect={false}
              disableFuture
              slotProps={{
                field: {
                  readOnly: true,
                },
                inputAdornment: {
                  position: "end",
                  style: {
                    marginTop: "2rem",
                  },
                },
                actionBar: { actions: ["cancel", "accept"] },
              }}
              onChange={handleChangeDate}
              // key={date ? value?.toString() : "null"}
            />
          </Box>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default NewFormCalendar;
