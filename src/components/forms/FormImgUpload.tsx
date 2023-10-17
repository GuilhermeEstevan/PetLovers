import { useState } from "react";

const FormImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedImage(file);
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
