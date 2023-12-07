import Wrapper from "../assets/wrappers/petsPage";
import { useEffect, useState } from "react";
import Pet from "../components/Pet";
import { usePetContext } from "../context/petContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loading from "../components/Loading";
import adoptImg from "../assets/images/cute-dog-playing-with-woman-shelter-adoption.jpg";

const PetsPage = () => {
  const { getAllPets, allPets, isLoading } = usePetContext();
  const [currentPage, setCurrentPage] = useState(1);
  const pets = allPets.pets;

  const numOfPages = allPets.numOfPages;

  useEffect(() => {
    getAllPets(currentPage);
  }, [currentPage]);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

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
                <a
                  href="https://www.instagram.com/anjinhos4patas"
                  target="blank"
                >
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
        {numOfPages > 1 && (
          <div className="page-controller">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="btn page-btn"
            >
              <FaArrowLeft />
            </button>
            <span className="current-page">Página {currentPage}</span>
            <button
              onClick={nextPage}
              className="btn page-btn"
              disabled={currentPage === allPets.numOfPages}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default PetsPage;
