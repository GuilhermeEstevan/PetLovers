import Wrapper from "../assets/wrappers/formPage";
import FormRow from "../components/forms/FormRow";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePetContext } from "../context/petContext";
import { toast } from "react-toastify";
import { TPetProfileData } from "../interface/petInterface";
import FormImgUpload from "../components/forms/FormImgUpload";
import NewFormCalendar from "../components/forms/NewFormCalendar";
import candleIcon from "../assets/images/birthday-cake-svgrepo-com.svg";
import colorPalette from "../assets/images/paint-palette-art-svgrepo-com.svg";
import genderIcon from "../assets/images/gender-svgrepo-com.svg";
{
  /* <PetInfo icon={<img src={candleIcon} />} text={`${age} anos`} /> */
}
{
  /* <PetInfo icon={<img src={colorPalette} />} text={color} /> */
}
{
  /* <PetInfo icon={<img src={genderIcon} />} text={gender} /> */
}

const PetProfile = () => {
  const { singlePet, getSinglePet, setSinglePet, setPageLoading } =
    usePetContext();
  const { petId } = useParams();
  const navigate = useNavigate();

  if (!petId) {
    navigate("/");
    return;
  }

  const [petData, setPetData] = useState<TPetProfileData>({
    name: "",
    gender: "",
    birthday: "",
    breed: "",
    color: "",
    photo: "",
    species: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setPetData({
      ...petData,
      [name]: value,
    });
  };

  const handleDateChange = (date: string | null) => {
    if (date) {
      setPetData({
        ...petData,
        birthday: date,
      });
    }
  };

  useEffect(() => {
    // Update petData when singlePet changes
    setPetData((prevData) => ({
      ...prevData,
      name: singlePet?.name || "",
      gender: singlePet?.gender || "",
      birthday: singlePet?.birthday || "",
      breed: singlePet?.breed || "",
      color: singlePet?.color || "",
      photo: singlePet?.photo || "",
      species: singlePet?.species || "",
    }));
  }, [singlePet]);

  useEffect(() => {
    getSinglePet(petId);
    return () => {
      setPageLoading(true);
      setSinglePet(null);
    };
  }, []);

  return (
    <Wrapper>
      <h3>Perfil de {singlePet?.name}</h3>
      <FormImgUpload setFile={setFile} label="foto de perfil" file={file} />
      <form className="form-center">
        <FormRow
          type="text"
          name="name"
          value={petData.name}
          handleChange={handleChange}
          labelText="Nome do Pet"
        />
        <FormRow
          type="text"
          name="species"
          value={petData.species}
          handleChange={handleChange}
          labelText="Espécie"
        />
        <FormRow
          type="text"
          name="breed"
          value={petData.breed}
          labelText="Raça"
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="color"
          value={petData.color}
          labelText="Cor do Pet"
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="gender"
          value={petData.gender}
          labelText="Sexo"
          handleChange={handleChange}
        />
        <NewFormCalendar
          date={petData.birthday}
          setDate={handleDateChange}
          labelText={"Data de Nascimento"}
        />

        <button type="submit" className="btn btn-block">
          {"Salvar"}
        </button>
      </form>
    </Wrapper>
  );
};
export default PetProfile;
