import PetCardContainer from "../components/PetCardContainer";
import PetCardForm from "../components/PetCardForm";
import { useEffect } from "react";
import { usePetContext } from "../context/petContext";
import { useNavigate } from "react-router-dom";

const PetCard = () => {
  const { SetEditingCardInfo, setIsEditing, singlePetError } = usePetContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (singlePetError) {
      navigate("/");
    }

    return () => {
      SetEditingCardInfo(null);
      setIsEditing(false);
    };
  }, [singlePetError]);

  return (
    <>
      <PetCardForm />
      <PetCardContainer />
    </>
  );
};
export default PetCard;
