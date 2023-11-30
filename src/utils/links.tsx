import { PiDogFill } from "react-icons/pi";
import { SiDatadog } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";

const links = [
  {
    id: 1,
    text: "Meus Pets",
    path: "/",
    icon: <PiDogFill />,
  },
  {
    id: 2,
    text: "Cadastrar Pet",
    path: "addPet",
    icon: <SiDatadog />,
  },
  {
    id: 3,
    text: "Perfil",
    path: "profile",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "Adote!",
    path: "https://www.instagram.com/anjinhos4patas",
    icon: <BiHomeHeart />,
  },
];

export default links;
