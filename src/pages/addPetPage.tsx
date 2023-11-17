import FormRow from "../components/forms/FormRow";
import Wrapper from "../assets/wrappers/formPage";
import FormRowSelect from "../components/forms/FormRowSelect";
import FormImgUpload from "../components/forms/FormImgUpload";
import NewFormCalendar from "../components/forms/NewFormCalendar";
import { usePetContext } from "../context/petContext";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TCreatePetData } from "../interface/petInterface";
import moment from "moment";
import Loading from "../components/Loading";

const AddPetPage = () => {
  const isEditing = false;
  const genderOptions = ["macho", "fêmea"];
  const [file, setFile] = useState<File | null>(null);
  const {
    pet,
    setPet,
    createPet,
    uploadImageToCloudinary,
    singlePet,
    pageLoading,
    setPageLoading,
  } = usePetContext();
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

  const handleDateChange = (date: string | null) => {
    if (date) {
      setPet({
        ...pet,
        birthday: date,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { birthday, gender, color, name, breed, species } = pet;
    if (!file) {
      toast.error("Selecione uma foto de perfil para o Pet !");
      return;
    }
    if (
      birthday === "" ||
      gender === "" ||
      color === "" ||
      name === "" ||
      breed === "" ||
      species === ""
    ) {
      toast.error("Preencha todos os campos !");
      return;
    }

    const secureUrl = await uploadImageToCloudinary(file);
    const formattedDate = moment(pet.birthday, "DD/MM/YYYY").toISOString();
    const createPetData: TCreatePetData = {
      ...pet,
      photo: secureUrl,
      birthday: formattedDate,
    };
    createPet(createPetData);
    clearForm();
  };

  const clearForm = () => {
    setPet({
      birthday: "",
      breed: "",
      color: "",
      gender: "",
      name: "",
      photo: "",
      species: "",
    });
    setFile(null);
  };

  useEffect(() => {
    if (!singlePet) {
      setPageLoading(false);
    }
  }, [singlePet]);

  if (pageLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <form className="form" encType="multipart/form-data">
        <h3>{isEditing ? "Editar Cadastro do Pet" : "Adcionar Novo Pet"}</h3>
        <div className="form-imgUpload">
          <FormImgUpload setFile={setFile} label="foto de perfil" file={file} />
        </div>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
            labelText="Nome do Pet"
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
            labelText="Raça"
          />
          <FormRowSelect
            name="gender"
            value={gender}
            handleChange={handleChange}
            list={genderOptions}
            labelText="Sexo"
          />
          <FormRow
            type="text"
            name="color"
            value={color}
            handleChange={handleChange}
            labelText="Cor"
          />

          <NewFormCalendar
            date={pet.birthday}
            setDate={handleDateChange}
            labelText={"Data de Nascimento"}
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

export default AddPetPage;
