import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/errorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Página não encontrada</h3>
        <Link to="/">Voltar a página principal</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
