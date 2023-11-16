import Wrapper from "../assets/wrappers/galleryPhoto";
import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { usePetContext } from "../context/petContext";

type TGalleryPhoto = {
  image: string;
  imageId: string;
  petId: string;
};

const GalleryPhoto = ({ image, imageId, petId }: TGalleryPhoto) => {
  const { deleteGalleryPhoto, isLoading } = usePetContext();

  const handleDeleteBtn = () => {
    deleteGalleryPhoto(petId, imageId);
  };

  const handleDownloadBtn = () => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Defina o atributo crossOrigin
    img.src = image;

    img.onload = () => {
      // Agora, a imagem está carregada e o download pode ser iniciado
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, img.width, img.height);

      // Transforma o canvas em um blob
      canvas.toBlob((blob: any) => {
        // Cria um link temporário para download
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `pet_image_${petId}_${imageId}`;
        downloadLink.click();
        URL.revokeObjectURL(downloadLink.href); // Libera a URL após o download
      });
    };
  };

  return (
    <Wrapper>
      <div className="photo">
        <img src={image} alt="" />
        <div className="overlay">
          <button
            className="download-btn"
            disabled={isLoading}
            onClick={handleDownloadBtn}
          >
            <IoMdDownload />
          </button>
          <button
            className="delete-btn"
            disabled={isLoading}
            onClick={handleDeleteBtn}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default GalleryPhoto;
