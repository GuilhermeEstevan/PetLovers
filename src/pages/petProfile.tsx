import Wrapper from "../assets/wrappers/formPage";
import FormRow from "../components/forms/FormRow";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePetContext } from "../context/petContext";
import { toast } from "react-toastify";
import { TPetProfileData } from "../interface/petInterface";
import FormImgUpload from "../components/forms/FormImgUpload";
import NewFormCalendar from "../components/forms/NewFormCalendar";
import FormRowSelect from "../components/forms/FormRowSelect";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

const PetProfile = () => {
  const {
    singlePet,
    getSinglePet,
    setSinglePet,
    setPageLoading,
    editPet,
    deletePet,
  } = usePetContext();
  const genderOptions = ["macho", "fêmea"];
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
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

    console.log(petData);
  };

  const handleDateChange = (date: string | null) => {
    if (date) {
      setPetData({
        ...petData,
        birthday: date,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { birthday, gender, color, name, breed, species, photo } = petData;
    // if (!file) {
    //   toast.error("Selecione uma foto de perfil para o Pet !");
    //   return;
    // }
    if (
      birthday === "" ||
      gender === "" ||
      color === "" ||
      name === "" ||
      breed === "" ||
      species === "" ||
      photo === ""
    ) {
      toast.error("Preencha todos os campos !");
      return;
    }

    editPet(petData, petId);
  };

  const handleDeleteBtn = () => {
    deletePet(petId);
    navigate("/");
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
        <div className="profile-row">
          <FormRowSelect
            name="gender"
            value={petData.gender}
            labelText="Sexo"
            list={genderOptions}
            handleChange={handleChange}
          />
        </div>
        <div className="profile-row">
          <NewFormCalendar
            date={petData.birthday}
            setDate={handleDateChange}
            labelText={"Data de Nascimento"}
          />
        </div>
      </form>
      <div className="btn-container">
        <button
          type="button"
          className="btn btn-block btn-danger"
          onClick={() => setDeleteModalOpen(true)}
        >
          {"Excluir Pet"}
        </button>
        <button type="submit" className="btn btn-block" onClick={handleSubmit}>
          {"Salvar"}
        </button>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteBtn}
      />
    </Wrapper>
  );
};
export default PetProfile;
