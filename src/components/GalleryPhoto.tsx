import Wrapper from "../assets/wrappers/galleryPhoto";

const GalleryPhoto = ({ image }: any) => {
  return (
    <Wrapper>
      <div className="photo">
        <img src={image} alt="" />
      </div>
    </Wrapper>
  );
};
export default GalleryPhoto;
