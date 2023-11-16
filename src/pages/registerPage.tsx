import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/registerPage";
import Logo from "../components/Logo";
import FormRow from "../components/forms/FormRow";
import { MdPets } from "react-icons/md";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(true);
  const { user, isLoading } = useUserContext();

  const toggleMember = () => {
    setIsMember(!isMember);
  };

  const [name, setName] = useState("");
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const [email, setEmail] = useState("");
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const { registerUser, loginUser } = useUserContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !password || (!isMember && !name)) {
      toast.error("Preencha todos os campos");
    }

    if (!isMember) {
      registerUser({ email, name, password });
      return;
    }

    loginUser({ email, password });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <nav>
        {" "}
        <h1>
          Pet <span>Lovers</span>{" "}
          <span className="pawn-icon">
            <MdPets />
          </span>
        </h1>
      </nav>
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{isMember ? "Login" : "Registrar"}</h3>
        {/* NAME */}
        {!isMember && (
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleName}
            labelText="Nome"
          />
        )}
        {/* EMAIL */}
        <FormRow
          type="text"
          name="email"
          value={email}
          labelText="Email"
          handleChange={handleEmail}
        />
        {/* PASSWORD */}
        <FormRow
          type="text"
          name="password"
          value={password}
          labelText="Senha"
          handleChange={handlePassword}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Enviar"}
        </button>
        <p>
          {isMember ? "Não tem cadastro ainda? " : "Já tem cadastro? "}
          <button type="button" onClick={toggleMember} className="member-btn">
            {isMember ? "Registrar-se" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
