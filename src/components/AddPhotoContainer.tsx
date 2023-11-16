import Wrapper from "../assets/wrappers/formPage";
import { usePetContext } from "../context/petContext";
import { TaddGalleryPhotoData } from "../interface/petInterface";
// import FormGalleryUpload from "./forms/FormGalleryUpload";
import { useState } from "react";
import FormImgUpload from "./forms/FormImgUpload";
import { toast } from "react-toastify";

type TAddPhotoContainerProps = {
  petId: string;
};

const AddPhotoContainer = ({ petId }: TAddPhotoContainerProps) => {
  const { addGalleryPhoto, isLoading, uploadImageToCloudinary } =
    usePetContext();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      return toast.error("Nenhuma imagem foi selecionada!");
    }
    const secureUrl = await uploadImageToCloudinary(file);
    console.log(secureUrl);
    const addGalleryPhotoData: TaddGalleryPhotoData = {
      image: secureUrl,
    };
    addGalleryPhoto(petId, addGalleryPhotoData);
  };

  const handleClearImage = () => {
    setFile(null);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Adcionar Nova Foto</h3>
        <div className="addPhoto-center">
          <FormImgUpload setFile={setFile} label="galeria" file={file} />
          {/* <FormGalleryUpload setFile={setFile} /> */}
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
