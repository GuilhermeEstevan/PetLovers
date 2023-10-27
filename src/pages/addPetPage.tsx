import FormRow from "../components/forms/FormRow";
import Wrapper from "../assets/wrappers/formPage";
import FormRowSelect from "../components/forms/FormRowSelect";
import FormImgUpload from "../components/forms/FormImgUpload";
import NewFormCalendar from "../components/forms/NewFormCalendar";
import { Dayjs } from "dayjs";
import { useState } from "react";

const AddPetPage = () => {
  const isEditing = false;
  const handleJobInput = () => {};
  const tempOptions = ["Macho", "Fêmea"];
  const [birthday, setBirthday] = useState<Dayjs | null>(null);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Editar Cadastro do Pet" : "Adcionar Novo Pet"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value="Billy"
            handleChange={handleJobInput}
            labelText="Nome do pet"
          />
          <FormRow
            type="text"
            name="species"
            value={"cachorro"}
            handleChange={handleJobInput}
            labelText="Espécie"
          />
          <FormRow
            type="text"
            name="breed"
            value={"Pinscher"}
            handleChange={handleJobInput}
            labelText="raça"
          />
          <FormRowSelect
            name="gender"
            value={"gender"}
            handleChange={handleJobInput}
            list={tempOptions}
            labelText="sexo"
          />
          <FormRow
            type="text"
            name="color"
            value={"preto"}
            handleChange={handleJobInput}
            labelText="cor"
          />

          <NewFormCalendar
            setDate={setBirthday}
            labelText={"Data de Nascimento"}
          />
          <FormImgUpload />

          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn">
              Limpar
            </button>
            <button type="submit" className="btn btn-block submmit-btn">
              {isEditing ? "Editar" : "Criar"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddPetPage;
