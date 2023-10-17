import { useState } from "react";

const FormGalleryUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="form-row image-row">
      <input
        type="file"
        accept="image/*"
        id="petImage"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default FormGalleryUpload;
