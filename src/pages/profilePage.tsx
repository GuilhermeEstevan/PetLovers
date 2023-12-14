import { useState } from "react";
import Wrapper from "../assets/wrappers/formPage";
import FormRow from "../components/forms/FormRow";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { isLoading, user, updateUser } = useUserContext();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    phone: user?.phone || "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);
      setIsEmailValid(isValid);
    }

    if (name === "phone") {
      // Limita o campo de telefone a 11 dígitos
      value = value.slice(0, 11);
      // Remove qualquer caractere não numérico
      value = value.replace(/\D/g, "");
    }

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, lastName, email, phone } = userData;

    if (!name || !lastName || !email || !phone) {
      toast.error("preencha todos campos");
      return;
    }

    if (!isEmailValid) {
      toast.error("Formato de e-mail inválido");
      return;
    }

    updateUser({ name, lastName, email, phone });
  };

  return (
    <Wrapper>
      <h3>Perfil</h3>
      <form className="form-center">
        <FormRow
          type="text"
          name="name"
          value={userData.name}
          handleChange={handleChange}
          labelText="Nome"
        />
        <FormRow
          type="text"
          name="lastName"
          value={userData.lastName}
          handleChange={handleChange}
          labelText="Sobrenome"
        />
        <FormRow
          type="text"
          name="email"
          value={userData.email}
          labelText="E-mail"
          handleChange={handleChange}
        />
        <FormRow
          type="tel"
          name="phone"
          value={userData.phone}
          labelText="Telefone"
          handleChange={handleChange}
          placeholder="Digite o telefone (apenas números)"
        />
        <button
          type="submit"
          className="btn btn-block"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </Wrapper>
  );
};

export default ProfilePage;
