import { useState } from "react";

type TFormImgProps = {
  setFile: (file: File) => void;
};

const FormImgUpload = ({ setFile }: TFormImgProps) => {
  const [previewSource, setPreviewSource] = useState<string>("");

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
    const maxSize = 3 * 1024 * 1024;
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
