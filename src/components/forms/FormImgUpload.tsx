import { useState } from "react";

type TFormImgProps = {
  setImg: (file: File) => void;
};

const FormImgUpload = ({ setImg }: TFormImgProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const formData = new FormData();
    formData.append("photo", file);
    setImg(file);
    console.log(file);
    console.log(typeof file);
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
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Imagem do pet"
          className="pet-image-preview"
        />
      )}
    </div>
  );
};

export default FormImgUpload;
