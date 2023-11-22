import Wrapper from "../assets/wrappers/formPage";
import FormRow from "../components/forms/FormRow";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePetContext } from "../context/petContext";
import { toast } from "react-toastify";
import { TCreatePetData, TPetProfileData } from "../interface/petInterface";
import FormImgUpload from "../components/forms/FormImgUpload";
import NewFormCalendar from "../components/forms/NewFormCalendar";
import FormRowSelect from "../components/forms/FormRowSelect";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import moment from "moment";

const PetProfile = () => {
  const {
    singlePet,
    getSinglePet,
    setSinglePet,
    setPageLoading,
    editPet,
    deletePet,
    uploadImageToCloudinary,
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(petData);

    const { birthday, gender, color, name, breed, species, photo } = petData;

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

    let formattedDate;
    //Verifique se a data de nascimento não está no formato ISO (YYYY-MM-DDTHH:mm:ss.sssZ)
    if (!moment(birthday, moment.ISO_8601, true).isValid()) {
      formattedDate = moment(petData.birthday, "DD/MM/YYYY").toISOString();
    } else {
      formattedDate = birthday;
    }

    // Caso o usuário selecione uma nova foto para o pet
    let secureUrl = "";
    if (file) {
      secureUrl = await uploadImageToCloudinary(file);
      const editPetData: TCreatePetData = {
        ...petData,
        birthday: formattedDate,
        photo: secureUrl,
      };
      editPet(editPetData, petId);
      return;
    }
    const editPetData: TCreatePetData = {
      ...petData,
      birthday: formattedDate,
    };

    editPet(editPetData, petId);
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
      <form>
        <h3>Perfil de {singlePet?.name}</h3>
        <div className="form-imgUpload">
          <FormImgUpload setFile={setFile} label="foto de perfil" file={file} />
        </div>
        <div className="form-center">
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
          <FormRowSelect
            name="gender"
            value={petData.gender}
            labelText="Sexo"
            list={genderOptions}
            handleChange={handleChange}
          />
          <NewFormCalendar
            date={petData.birthday}
            setDate={handleDateChange}
            labelText={"Data de Nascimento"}
          />
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => setDeleteModalOpen(true)}
          >
            Excluir Pet
          </button>
          <button
            type="submit"
            className="btn btn-block"
            onClick={handleSubmit}
          >
            Salvar
          </button>
        </div>
      </form>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteBtn}
      />
    </Wrapper>
  );
};
export default PetProfile;
