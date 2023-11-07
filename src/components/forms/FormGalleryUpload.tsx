import { useState } from "react";

type TFormImgProps = {
  setFile: (file: File) => void;
};

const FormGalleryUpload = ({ setFile }: TFormImgProps) => {
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
      <input
        type="file"
        accept="image/*"
        id="petImage"
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default FormGalleryUpload;
