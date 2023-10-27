import Wrapper from "../assets/wrappers/petsPage";
import { useEffect } from "react";
import Pet from "../components/Pet";
import { usePetContext } from "../context/petContext";

const PetsPage = () => {
  const { getAllPets, allPets } = usePetContext();
  const pets = allPets.pets;

  useEffect(() => {
    getAllPets();
  }, []);

  return (
    <Wrapper>
      <div className="pets">
        {pets?.map((pet) => {
          const { name, breed, color, photo, birthday, gender } = pet;

          return (
            <Pet
              name={name}
              breed={breed}
              color={color}
              photo={photo}
              birthday={birthday}
              gender={gender}
              key={pet._id}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default PetsPage;
