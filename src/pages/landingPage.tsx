import Wrapper from "../assets/wrappers/landingPage";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import paw from "../assets/images/footprints-309158_1920.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-content">
          <h3 className="logo-text">
            Pet <span>Lovers</span>{" "}
            <span className="pawn-icon">
              <MdPets />
              {/* <img src={logo} alt="" className="logo" /> */}
            </span>
          </h3>
        </div>
      </nav>
      <div className="banner">
        <div className="container">
          <p>
            Mais do que um site,
            <br /> uma homenagem aos laços incondicionais <br /> entre humanos e
            animais
          </p>
          <Link to="/register" className="register-btn">
            Registre-se
          </Link>
        </div>
      </div>

      <div className="info">
        <div className="container info-text">
          <img src={paw} alt="Paw" className="paw-image" />
          <div className="info-box">
            <h4>Reuna seus pets num só lugar</h4>
            <p>
              Bem-vindo ao nosso software gratuito, dedicado aos amantes de
              animais de estimação como você! Aqui, oferecemos uma plataforma
              onde você pode cuidar ainda melhor do seu pet. Registre seu amigo
              peludo, crie uma carteirinha virtual com as vacinas essenciais,
              acompanhe o último banho e tosa, e eternize os momentos especiais
              na galeria exclusiva do seu pet.
            </p>
          </div>
        </div>
      </div>
      <div className="our-services">
        <div className="service petCard">
          <div className="service-desc">
            <h4>controle de vacinas</h4>
          </div>
        </div>
        <div className="service petGallery">
          <div className="service-desc">
            <h4>Galeria de fotos</h4>
          </div>
        </div>
        <div className="service petAdoption">
          <div className="service-desc">
            <h4>Seja o herói que um pet espera!</h4>
          </div>
        </div>
      </div>

      <footer>
        <div className="container footer-info">
          <div className="copyright">
            <p>
              Copyright © 2023 Todos os direitos <br />
              reservados.
            </p>
            <h3 className="logo-text">
              Pet <span>Lovers</span>{" "}
              <span className="pawn-icon">
                <MdPets />
              </span>
            </h3>
          </div>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/guilherme-estevan/"
              className="linkedin"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/GuilhermeEstevan"
              className="github"
              target="blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default LandingPage;
