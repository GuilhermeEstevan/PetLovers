import { useParams, useNavigate } from "react-router-dom";
import AddPhotoContainer from "../components/AddPhotoContainer";
import GalleryContainer from "../components/GalleryContainer";
import { usePetContext } from "../context/petContext";
import { useEffect } from "react";

const GalleryPage = () => {
  const { petId } = useParams();
  const { singlePetError } = usePetContext();
  const navigate = useNavigate();

  if (!petId) {
    navigate("/");
    return;
  }

  useEffect(() => {
    if (singlePetError) {
      navigate("/");
    }
  }, [singlePetError]);

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
