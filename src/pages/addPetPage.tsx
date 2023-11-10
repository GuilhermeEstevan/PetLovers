import FormRow from "../components/forms/FormRow";
import Wrapper from "../assets/wrappers/formPage";
import FormRowSelect from "../components/forms/FormRowSelect";
import FormImgUpload from "../components/forms/FormImgUpload";
import NewFormCalendar from "../components/forms/NewFormCalendar";
import { usePetContext } from "../context/petContext";
import { useState } from "react";
import axios from "axios";
import { TCreatePetData } from "../interface/petInterface";
const cloudName = import.meta.env.VITE_CLOUD_NAME;

const AddPetPage = () => {
  const isEditing = false;
  const genderOptions = ["macho", "fêmea"];
  const [file, setFile] = useState<File | null>(null);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const secureUrl = await uploadImageToCloudinary(file);
    const createPetData: TCreatePetData = {
      ...pet,
      photo: secureUrl,
    };
    createPet(createPetData);
  };

  const uploadImageToCloudinary = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "PetLovers");
    formData.append("upload_preset", "PetLovers-images");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        formData
      );
      console.log(response);
      return response.data.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <form className="form" encType="multipart/form-data">
        <h3>{isEditing ? "Editar Cadastro do Pet" : "Adcionar Novo Pet"}</h3>
        <div className="form-imgUpload">
          <FormImgUpload setFile={setFile} />
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

export default AddPetPage;
