import Wrapper from "../assets/wrappers/formPage";
import { usePetContext } from "../context/petContext";
import { TaddGalleryPhotoData } from "../interface/petInterface";
import FormGalleryUpload from "./forms/FormGalleryUpload";
import axios from "axios";
import { useState } from "react";

type TAddPhotoContainerProps = {
  petId: string;
};

const AddPhotoContainer = ({ petId }: TAddPhotoContainerProps) => {
  const { addGalleryPhoto } = usePetContext();
  const [file, setFile] = useState<File | null>(null);
  const cloudName = import.meta.env.VITE_CLOUD_NAME;

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const secureUrl = await uploadImageToCloudinary(file);
    console.log(secureUrl);
    const addGalleryPhotoData: TaddGalleryPhotoData = {
      image: secureUrl,
    };
    addGalleryPhoto(petId, addGalleryPhotoData);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Adcionar Nova Foto</h3>
        <div className="addPhoto-center">
          <FormGalleryUpload setFile={setFile} />
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
            Adcionar
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddPhotoContainer;
