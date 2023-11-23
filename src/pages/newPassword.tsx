import { useState } from "react";
import Wrapper from "../assets/wrappers/registerPage";
import Logo from "../components/Logo";
import FormRow from "../components/forms/FormRow";
import { MdPets } from "react-icons/md";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify";

const NewPassword = () => {
  const { isLoading } = useUserContext();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!password) {
      toast.error("Preencha todos os campos");
      return;
    }
  };

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

        {/* PASSWORD */}
        <FormRow
          type="text"
          name="password"
          value={password}
          labelText="Senha"
          handleChange={handlePassword}
        />
        {/* PASSWORD */}
        <FormRow
          type="text"
          name="password"
          value={confirmPassword}
          labelText="Senha"
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
