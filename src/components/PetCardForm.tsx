import Wrapper from "../assets/wrappers/formPage";
import FormRow from "./forms/FormRow";
import { useState, useEffect } from "react";
import NewFormCalendar from "./forms/NewFormCalendar";
import { useNavigate, useParams } from "react-router-dom";
import { usePetContext } from "../context/petContext";
import { TCreatePetCardData } from "../interface/petInterface";

const PetCardForm = () => {
  const petCardInitialState = {
    description: "",
    procedure: "",
    date: new Date(),
  };
  const [petCard, setPetCard] =
    useState<TCreatePetCardData>(petCardInitialState);

  const handleJobInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setPetCard({
      ...petCard,
      [name]: value,
    });
  };
  const handleDateChange = (date: Date | null) => {
    setPetCard({
      ...petCard,
      date: date || new Date(),
    });
  };
  const { createPetCard, isEditing, editPetCard, editingCardInfo } =
    usePetContext();
  const { petId } = useParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!petId) {
      const navigate = useNavigate();
      return navigate("/");
    }
    if (isEditing) {
      const id = editingCardInfo?._id;
      if (!id) return console.log("Id não encontrado!");
      editPetCard(petId, id, petCard);
      setPetCard(petCardInitialState);
      return;
    }

    createPetCard(petCard, petId);
    setPetCard(petCardInitialState);
  };

  useEffect(() => {
    if (isEditing && editingCardInfo) {
      setPetCard({
        description: editingCardInfo?.description,
        procedure: editingCardInfo?.procedure,
        date: new Date(editingCardInfo.date),
      });
    }
  }, [isEditing]);

  return (
    <Wrapper>
      <form className="form">
        <h3>Carteirinha do pet</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="procedure"
            value={petCard.procedure}
            handleChange={handleJobInput}
            labelText="Procedimento"
          />
          <FormRow
            type="text"
            name="description"
            value={petCard.description}
            handleChange={handleJobInput}
            labelText="Descrição"
          />
          <NewFormCalendar
            date={petCard.date}
            setDate={handleDateChange}
            labelText={"Data"}
          />
        </div>
          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn">
              Limpar
            </button>
            <button
              type="submit"
              className="btn btn-block submmit-btn"
              onClick={handleSubmit}
            >
              {isEditing ? "Editar" : "Criar"}
            </button>
          </div>
      </form>
    </Wrapper>
  );
};
export default PetCardForm;
