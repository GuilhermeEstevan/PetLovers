import { useState } from "react";
import Wrapper from "../assets/wrappers/resetPassword";
import Logo from "../components/Logo";
import FormRow from "../components/forms/FormRow";
import { MdPets } from "react-icons/md";
import { useUserContext } from "../context/userContext";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  console.log(token);

  const { isLoading, resetPassword } = useUserContext();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!token) {
      toast.error("token inválido!");
      return;
    }

    if (!password || !confirmPassword) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas são incompatíveis");
      return;
    }

    const resetSuccess = await resetPassword(password, token);
    if (resetSuccess) {
      navigate("/register");
      return;
    } else {
      navigate("/resetPassword");
    }
  };

  return (
    <Wrapper className="full-page">
      <div className="logo">
        <h1>
          Pet <span>Lovers</span>{" "}
          <span className="pawn-icon">
            <MdPets />
          </span>
        </h1>
      </div>
      <form className="form reset-password" onSubmit={handleSubmit}>
        <Logo />
        <h3>redefinir senha</h3>
        <p className="reset-password">
          Informe o e-mail para o qual deseja redefinir a sua senha
        </p>

        {/* PASSWORD */}
        <FormRow
          type="password"
          name="password"
          value={password}
          labelText="Senha"
          handleChange={handlePassword}
        />
        {/* PASSWORD */}
        <FormRow
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          labelText="Confirme a Senha"
          handleChange={handleConfirmPassword}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Enviando E-mail..." : "Redefinir Senha"}
        </button>
      </form>
    </Wrapper>
  );
};
export default NewPassword;
