import Wrapper from "../assets/wrappers/petsPage";
import { useEffect } from "react";
import Pet from "../components/Pet";
import { usePetContext } from "../context/petContext";
import Loading from "../components/Loading";

const PetsPage = () => {
  const { getAllPets, allPets, isLoading } = usePetContext();
  const pets = allPets.pets;

  useEffect(() => {
    getAllPets();
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="pets">
        {pets?.map((pet) => {
          const { name, breed, color, photo, birthday, gender, _id } = pet;

          return (
            <Pet
              name={name}
              breed={breed}
              color={color}
              id={_id}
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
