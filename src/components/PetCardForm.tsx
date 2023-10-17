import Wrapper from "../assets/wrappers/formPage";
import FormCalendar from "./forms/FormCalendar";
import FormRow from "./forms/FormRow";
import { useState } from "react";

const PetCardForm = () => {
  const handleJobInput = (e: any) => {
    setDescription(e.target.value);
  };

  const [procedure, setProcedure] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <Wrapper>
      <form className="form">
        <h3>Carteirinha do pet</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="procedure"
            value={procedure}
            handleChange={handleJobInput}
            labelText="Procedimento"
          />
          <FormRow
            type="text"
            name="description"
            value={description}
            handleChange={handleJobInput}
            labelText="Descrição"
          />
          <FormCalendar setDate={setDate} />
          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn">
              Limpar
            </button>
            <button type="submit" className="btn btn-block submmit-btn">
              Criar
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default PetCardForm;
