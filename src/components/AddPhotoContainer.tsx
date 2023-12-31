import Wrapper from "../assets/wrappers/formPage";
import { usePetContext } from "../context/petContext";
import { TaddGalleryPhotoData } from "../interface/petInterface";
// import FormGalleryUpload from "./forms/FormGalleryUpload";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import FormGalleryUpload from "./forms/FormGalleryUpload";

type TAddPhotoContainerProps = {
  petId: string;
};

const AddPhotoContainer = ({ petId }: TAddPhotoContainerProps) => {
  const { addGalleryPhoto, isLoading, uploadImageToCloudinary } =
    usePetContext();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      return toast.error("Nenhuma imagem foi selecionada!");
    }
    const secureUrl = await uploadImageToCloudinary(file);
    const addGalleryPhotoData: TaddGalleryPhotoData = {
      image: secureUrl,
    };
    addGalleryPhoto(petId, addGalleryPhotoData);
    setFile(null);
  };

  const handleClearImage = () => {
    setFile(null);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Adcionar Nova Foto</h3>
        <div className="addPhoto-center">
          <FormGalleryUpload setFile={setFile} label="galeria" file={file} />
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-block clear-btn"
            onClick={handleClearImage}
          >
            Limpar
          </button>
          <button
            type="submit"
            className="btn btn-block submmit-btn"
            onClick={handleSubmit}
          >
            {isLoading ? "Carregando..." : "Adcionar"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddPhotoContainer;
