import Wrapper from "../assets/wrappers/galleryPage";
import GalleryPhoto from "./GalleryPhoto";
import billy from "../assets/images/billy.jpeg";

const GalleryContainer = () => {
  return (
    <Wrapper>
      <div className="photos">
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
        <GalleryPhoto image={billy} />
      </div>
    </Wrapper>
  );
};

export default GalleryContainer;
