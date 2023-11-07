import Wrapper from "../assets/wrappers/galleryPhoto";

type TGalleryPhoto = {
  image: string;
};

const GalleryPhoto = ({ image }: TGalleryPhoto) => {
  return (
    <Wrapper>
      <div className="photo">
        <img src={image} alt="" />
      </div>
    </Wrapper>
  );
};
export default GalleryPhoto;
