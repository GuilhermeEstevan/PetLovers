import { useState, useEffect } from "react";
import defaultImg from "../../assets/images/dog-head.jpg";
import { usePetContext } from "../../context/petContext";

type TFormImgProps = {
  setFile: (file: File | null) => void;
  label: string;
  file: File | null;
};

const FormImgUpload = ({ setFile, label, file }: TFormImgProps) => {
  const [previewSource, setPreviewSource] = useState<string>("");
  const [fileInputKey, setFileInputKey] = useState<number>(0);
  const { singlePet } = usePetContext();

  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        setPreviewSource(reader.result as string);
      }
    };
  };

  const validadeImage = (file: File) => {
    if (!file.type.startsWith("image/")) {
      return false;
    }
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return false;
    }

    return true;
  };
  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file);

    if (file && validadeImage(file)) {
      previewFile(file);
      setFile(file);
    }
  };

  const handleSelectImage = (e: any) => {
    e.preventDefault();
    const fileInput = document.getElementById("petImage");
    fileInput?.click();
  };

  useEffect(() => {
    if (!file) {
      setPreviewSource("");
      setFileInputKey((prevKey) => prevKey + 1);
    }
  }, [file]);

  // Definição de data para perfil do pet
  useEffect(() => {
    if (singlePet?.photo) {
      setPreviewSource(singlePet?.photo);
    }
  }, [singlePet]);

  return (
    <div className="image-row">
      <div className="input">
        <label htmlFor="petImage" className="form-label">
          {label}
        </label>
        <button className="btn" onClick={handleSelectImage}>
          Selecionar foto
        </button>
        <input
          key={fileInputKey}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="petImage"
          name="petImage"
          onChange={handleFileInputChange}
        />
      </div>
      <img
        src={previewSource || defaultImg} // Substitua 'placeholder-image.png' pelo caminho da sua imagem de espaço reservado
        alt="Imagem do pet"
        className="pet-image-preview"
      />
    </div>
  );
};

export default FormImgUpload;
