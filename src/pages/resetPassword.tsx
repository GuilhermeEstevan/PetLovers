import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/registerPage";
import Logo from "../components/Logo";
import FormRow from "../components/forms/FormRow";
import { MdPets } from "react-icons/md";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { isLoading, sendResetEmailPassword } = useUserContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      toast.error("Preencha todos os campos");
      return;
    }

    sendResetEmailPassword(email);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Se há um token, redirecione para NewPassword
      navigate(`/newPassword?token=${token}`);
    }
  }, []);

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
      <form className="form reset-password" onSubmit={handleSubmit}>
        <Logo />
        <h3>redefinir senha</h3>
        <p className="reset-password">
          Informe o e-mail para o qual deseja redefinir a sua senha
        </p>
        {/* EMAIL */}
        <FormRow
          type="text"
          name="email"
          value={email}
          labelText="E-mail"
          handleChange={handleEmail}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Enviando E-mail..." : "Redefinir Senha"}
        </button>
      </form>
    </Wrapper>
  );
};
export default ResetPassword;
