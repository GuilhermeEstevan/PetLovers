import Wrapper from "../assets/wrappers/pet";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { BsEyeFill } from "react-icons/bs";

type TPetMain = {
  name: string;
  breed: string;
  color: string;
  photo: string;
  birthday: string;
  gender: string;
  id: string;
};

const Pet = (data: TPetMain) => {
  const { name, photo, id } = data;

  return (
    <Wrapper>
      <header>
        <Link to={`petProfile/${id}`} className="pet-image">
          <img src={photo} alt="pet image" />
          <span className="eye-icon">
            <BsEyeFill />
          </span>
        </Link>
      </header>
      <div className="content">
        <div className="content-center">
          <div className="info">
            <h3>{name}</h3>
          </div>
        </div>
        <footer className="actions">
          <Link to={`/petCard/${id}`} className="btn info-btn">
            Carteirinha
          </Link>
          <Link to={`/gallery/${id}`} className="btn gallery-btn">
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
