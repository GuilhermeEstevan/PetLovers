import Wrapper from "../assets/wrappers/landingPage";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";
import Logo from "../components/Logo";
import dogImage from "../assets/images/undraw_dog_c7i6.svg";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Pet <span>Lovers</span>{" "}
            <span className="pawn-icon">
              <MdPets />
            </span>
          </h1>
          <p>
            Mantenha todos os detalhes importantes dos seus pets em um só lugar.
            Adicione raça, idade, cor e fotos dedicadas para acompanhar o
            crescimento e diversão deles!
          </p>
          <Link to="/register" className="btn btn-hero">
            Prosseguir
          </Link>
        </div>
        <img src={dogImage} alt="welcome" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
