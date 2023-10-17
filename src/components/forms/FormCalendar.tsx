import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { useState } from "react";

registerLocale("pt-BR", ptBR);
setDefaultLocale("pt-BR");

type TFormCalendar = {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const FormCalendar = ({ setDate }: TFormCalendar) => {
  const [birthDay, setBirthDay] = useState(new Date());

  const handleChangeDate = (date: Date) => {
    setBirthDay(date);
    setDate(date);
    console.log(date);
  };

  return (
    <div className="form-row">
      <label className="form-label">Data de Nascimento:</label>
      <DatePicker
        className="form-input"
        selected={birthDay}
        onChange={handleChangeDate}
        dateFormat="dd/MM/yyyy"
        locale="pt-BR"
        dayClassName={(date) =>
          format(date, "eeee", { locale: ptBR }).toLowerCase()
        }
        scrollableYearDropdown
        yearDropdownItemNumber={20}
        showYearDropdown
        dropdownMode="select"
        closeOnScroll={true}
        disabledKeyboardNavigation
        onKeyDown={(e) => e.preventDefault()}
        maxDate={new Date()}
      />
    </div>
  );
};

export default FormCalendar;
