import Wrapper from "../assets/wrappers/pet";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import billy from "../assets/images/billy.jpeg";
import PetInfo from "./PetInfo";
import candleIcon from "../assets/images/birthday-cake-svgrepo-com.svg";
import colorPalette from "../assets/images/paint-palette-art-svgrepo-com.svg";
import genderIcon from "../assets/images/gender-svgrepo-com.svg";

const Pet = () => {
  return (
    <Wrapper>
      <header>
        <div className="pet-image">
          <img src={billy} alt="pet image" />
        </div>
        <div className="info">
          <h3>Nome</h3>
          <p>Raça</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <PetInfo icon={<img src={candleIcon} />} text="10 anos" />
          <PetInfo icon={<img src={colorPalette} />} text="Preto" />
          <PetInfo icon={<img src={genderIcon} />} text="macho" />
        </div>
        <footer className="actions">
          <Link to="/petCard" className="btn info-btn">
            Informações
          </Link>
          <Link to="/gallery" className="btn gallery-btn">
            <span className="galery-icon">
              <IoMdImages />
            </span>
            Galeria
          </Link>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Pet;
