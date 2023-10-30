import FormRow from "../components/forms/FormRow";
import Wrapper from "../assets/wrappers/formPage";
import FormRowSelect from "../components/forms/FormRowSelect";
import FormImgUpload from "../components/forms/FormImgUpload";
import NewFormCalendar from "../components/forms/NewFormCalendar";
import { usePetContext } from "../context/petContext";

const AddPetPage = () => {
  const isEditing = false;
  const tempOptions = ["Macho", "Fêmea"];

  const { pet, setPet, createPet } = usePetContext();
  const { breed, color, name, species, gender } = pet;

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setPet({
        ...pet,
        birthday: date,
      });
    }
  };

  const handleImgUpload = async (file: any) => {
    console.log(file);
    setPet({
      ...pet,
      photo: file,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createPet(pet);
  };

  return (
    <Wrapper>
      <form className="form" encType="multipart/form-data">
        <h3>{isEditing ? "Editar Cadastro do Pet" : "Adcionar Novo Pet"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
            labelText="Nome do pet"
          />
          <FormRow
            type="text"
            name="species"
            value={species}
            handleChange={handleChange}
            labelText="Espécie"
          />
          <FormRow
            type="text"
            name="breed"
            value={breed}
            handleChange={handleChange}
            labelText="raça"
          />
          <FormRowSelect
            name="gender"
            value={gender}
            handleChange={handleChange}
            list={tempOptions}
            labelText="sexo"
          />
          <FormRow
            type="text"
            name="color"
            value={color}
            handleChange={handleChange}
            labelText="cor"
          />

          <NewFormCalendar
            setDate={handleDateChange}
            labelText={"Data de Nascimento"}
          />
          <FormImgUpload setImg={handleImgUpload} />

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
        </div>
      </form>
    </Wrapper>
  );
};

export default AddPetPage;
