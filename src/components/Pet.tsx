import Wrapper from "../assets/wrappers/pet";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import PetInfo from "./PetInfo";
import candleIcon from "../assets/images/birthday-cake-svgrepo-com.svg";
import colorPalette from "../assets/images/paint-palette-art-svgrepo-com.svg";
import genderIcon from "../assets/images/gender-svgrepo-com.svg";

type TPetMain = {
  name: string;
  breed: string;
  color: string;
  photo: string;
  birthday: Date;
  gender: string;
  id: string;
};

const Pet = (data: TPetMain) => {
  const { name, breed, birthday, color, photo, gender, id } = data;

  // IDADE DO PET
  const calculateAge = (birthday: Date): any => {
    const today = new Date();
    const birthYear = birthday.getFullYear();
    const currenteYear = today.getFullYear();

    let age = currenteYear - birthYear;

    // Verificar se o aniversário deste ano já ocorreu ou não
    const birthMonth = birthday.getMonth();
    const currenteMonth = today.getMonth();
    const birthDay = birthday.getDate();
    const currenteDay = today.getDate();

    if (
      currenteMonth < birthMonth ||
      (currenteMonth === birthMonth && currenteDay < birthDay)
    ) {
      age--;
    }
    return age;
  };
  const formatedBirthday = new Date(birthday);
  const age = calculateAge(formatedBirthday);

  return (
    <Wrapper>
      <header>
        <div className="pet-image">
          <img src={photo} alt="pet image" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>{breed}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <PetInfo icon={<img src={candleIcon} />} text={`${age} anos`} />
          <PetInfo icon={<img src={colorPalette} />} text={color} />
          <PetInfo icon={<img src={genderIcon} />} text={gender} />
        </div>
        <footer className="actions">
          {/* <Link to={`/petCard/${id}`} className="btn info-btn">
            Perfil
          </Link> */}
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
