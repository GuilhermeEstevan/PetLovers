import Wrapper from "../assets/wrappers/formPage";
import FormRow from "./forms/FormRow";
import { useState, useEffect } from "react";
import NewFormCalendar from "./forms/NewFormCalendar";
import { useNavigate, useParams } from "react-router-dom";
import { usePetContext } from "../context/petContext";
import { TCreatePetCardData } from "../interface/petInterface";
import FormRowSelect from "./forms/FormRowSelect";
import { Vaccines, HealthExams } from "../utils/vaccinesAndExams";
import moment from "moment";

const PetCardForm = () => {
  const petCardInitialState = {
    serviceType: "",
    service: "",
    description: "",
    date: "",
  };
  const [petCard, setPetCard] =
    useState<TCreatePetCardData>(petCardInitialState);
  const [selectedServiceType, setSelectedServiceType] = useState<string | null>(
    "vacina"
  );

  const handleJobInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "serviceType") {
      setSelectedServiceType(value);

      if (value === "banho" || value === "tosa") {
        setPetCard({
          ...petCard,
          [name]: value,
          service: value,
        });
      } else {
        setPetCard({
          ...petCard,
          [name]: value,
          service: "", // Reinicia a escolha do serviço ao mudar o tipo do serviço
        });
      }
    } else {
      // Atualiza o estado normalmente
      setPetCard({
        ...petCard,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date: string | null) => {
    if (date) {
      setPetCard({
        ...petCard,
        date: date,
      });
    }
  };
  const {
    createPetCard,
    isEditing,
    editPetCard,
    editingCardInfo,
    setIsEditing,
  } = usePetContext();
  const { petId } = useParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!petId) {
      const navigate = useNavigate();
      return navigate("/");
    }

    const formattedDate = moment(petCard.date, "DD/MM/YYYY").toISOString();
    if (isEditing) {
      const id = editingCardInfo?._id;
      if (!id) return console.log("Id não encontrado!");
      editPetCard(petId, id, { ...petCard, date: formattedDate });
      clearForm();
      return;
    }
    console.log(petCard.date);

    createPetCard({ ...petCard, date: formattedDate }, petId);
    clearForm();
  };

  const clearForm = () => {
    setPetCard(petCardInitialState);
    setIsEditing(false);
  };

  useEffect(() => {
    console.log(editingCardInfo);

    if (isEditing && editingCardInfo) {
      setSelectedServiceType(editingCardInfo.serviceType);
      setPetCard({
        serviceType: editingCardInfo?.serviceType,
        service: editingCardInfo?.service,
        description: editingCardInfo?.description,
        date: editingCardInfo.date,
      });
    }
  }, [isEditing]);

  return (
    <Wrapper>
      <form className="form">
        <h3>Carteirinha do pet</h3>
        <div className="form-center">
          <FormRowSelect
            name="serviceType"
            value={petCard.serviceType}
            handleChange={handleJobInput}
            labelText="Serviço"
            list={["vacina", "exame", "tosa", "banho"]}
          />
          {selectedServiceType !== "banho" &&
            selectedServiceType !== "tosa" && (
              <FormRowSelect
                name="service"
                value={petCard.service}
                handleChange={handleJobInput}
                labelText={
                  selectedServiceType === "vacina"
                    ? "Vacina"
                    : selectedServiceType === "exame"
                    ? "Exame"
                    : ""
                }
                list={
                  selectedServiceType === "vacina"
                    ? Object.values(Vaccines)
                    : selectedServiceType === "exame"
                    ? Object.values(HealthExams)
                    : []
                }
              />
            )}
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
          <button
            type="button"
            className="btn btn-block clear-btn"
            onClick={clearForm}
          >
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
