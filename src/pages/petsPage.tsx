import Wrapper from "../assets/wrappers/petsPage";
import { useEffect } from "react";
import Pet from "../components/Pet";
import { usePetContext } from "../context/petContext";
import Loading from "../components/Loading";
import adoptImg from "../assets/images/cute-dog-playing-with-woman-shelter-adoption.jpg";

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
      <div className="welcome-section"></div>

      <div className="pets-container">
        <p>Meus Pets</p>
        <div className="pets">
          {pets && pets.length < 1 ? (
            <div className="empty-pet">
              <h3>Nenhum pet cadastrado...</h3>
              <h4>Que tal adotar um ?</h4>
              <div className="adoption-photo">
                <a href="https://www.instagram.com/anjinhos4patas" target="blank">
                  <img src={adoptImg} alt="" />
                </a>
              </div>
            </div>
          ) : (
            pets?.map((pet) => {
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
            })
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default PetsPage;
