import Wrapper from "../assets/wrappers/galleryPage";
import GalleryPhoto from "./GalleryPhoto";
import { usePetContext } from "../context/petContext";
import { useEffect } from "react";

type TGalleryContainerProps = {
  petId: string;
};

const GalleryContainer = ({ petId }: TGalleryContainerProps) => {
  const { singlePet, getSinglePet } = usePetContext();

  useEffect(() => {
    getSinglePet(petId);
  }, []);

  return (
    <Wrapper>
      <div className="photos">
        {singlePet?.gallery.map((item) => {
          const { image, _id } = item;

          return <GalleryPhoto image={image} key={_id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GalleryContainer;
