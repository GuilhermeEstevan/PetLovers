import AddPhotoContainer from "../components/AddPhotoContainer";
import GalleryContainer from "../components/GalleryContainer";

const GalleryPage = () => {
  return (
    <>
      <div className="flex-page">
        <AddPhotoContainer />
        <GalleryContainer />
      </div>
    </>
  );
};
export default GalleryPage;
