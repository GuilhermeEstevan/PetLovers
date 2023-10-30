import { useState } from "react";

type TFormImgProps = {
  setImg: (file: any) => void;
};

const FormImgUpload = ({ setImg }: TFormImgProps) => {
  const [fileInputState, setFileInputState] = useState<any>("");
  const [previewSource, setPreviewSource] = useState<any>("");
  const [selectedFile, setSelectedFile] = useState<any>();

  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);

    //
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const handleSubmitFile = (e: any) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      setImg(reader.result);
    };
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
