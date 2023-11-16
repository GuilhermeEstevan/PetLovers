import { useParams, useNavigate } from "react-router-dom";
import AddPhotoContainer from "../components/AddPhotoContainer";
import GalleryContainer from "../components/GalleryContainer";

const GalleryPage = () => {
  const { petId } = useParams();

  if (!petId) {
    const navigate = useNavigate();
    navigate("/");
    return;
  }

  return (
    <>
      <div className="flex-page">
        <AddPhotoContainer petId={petId} />
        <GalleryContainer petId={petId} />
      </div>
    </>
  );
};
export default GalleryPage;
