import PetCardContainer from "../components/PetCardContainer";
import PetCardForm from "../components/PetCardForm";
import { useEffect } from "react";
import { usePetContext } from "../context/petContext";

const PetCard = () => {
  const { SetEditingCardInfo, setIsEditing } = usePetContext();

  useEffect(() => {
    return () => {
      SetEditingCardInfo(null);
      setIsEditing(false);
    };
  }, []);

  return (
    <>
      <PetCardForm />
      <PetCardContainer />
    </>
  );
};
export default PetCard;
