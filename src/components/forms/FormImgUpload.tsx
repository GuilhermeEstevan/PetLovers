import { useState } from "react";
import axios from "axios";

type TFormImgProps = {
  setSecureUrl: (secureUrl: string) => void;
};

const FormImgUpload = ({ setSecureUrl }: TFormImgProps) => {
  // const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState<string>("");
  const cloudName = import.meta.env.VITE_CLOUD_NAME;

  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        setPreviewSource(reader.result as string);
      }
    };
  };

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      // setFileInputState(e.target.value);
      previewFile(file);
      uploadImageToCloudinary(file);
    }
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
      setSecureUrl(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-row image-row">
      <label htmlFor="petImage" className="form-label">
        Foto de Perfil
      </label>
      <input
        type="file"
        accept="image/*"
        id="petImage"
        name="petImage"
        onChange={handleFileInputChange}
      />
      {previewSource && (
        <img
          src={previewSource}
          alt="Imagem do pet"
          className="pet-image-preview"
        />
      )}
    </div>
  );
};

export default FormImgUpload;
