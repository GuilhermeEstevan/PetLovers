import { useState } from "react";
import Wrapper from "../assets/wrappers/formPage";
import FormRow from "../components/forms/FormRow";

const ProfilePage = () => {
  const isLoading = false;

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e: any) => {};

  const [phone, setPhone] = useState("");
  const handlePhone = (e: any) => {
    // Limita o campo de telefone a 11 dígitos
    const inputValue = e.target.value.slice(0, 11);
    // Remove qualquer caractere não numérico
    const numericValue = inputValue.replace(/\D/g, "");
    setPhone(numericValue);
  };

  return (
    <Wrapper>
      <h3>Perfil</h3>
      <div className="form-center">
        <FormRow
          type="text"
          name="name"
          value={name}
          handleChange={handleChange}
          labelText="Nome"
        />
        <FormRow
          type="text"
          name="lastName"
          value={lastname}
          handleChange={handleChange}
          labelText="Sobrenome"
        />
        <FormRow
          type="text"
          name="email"
          value={email}
          labelText="E-mail"
          handleChange={handleChange}
        />
        <FormRow
          type="tel"
          name="phone"
          value={phone}
          labelText="Telefone"
          handleChange={handlePhone}
          placeholder="Digite o telefone (apenas números)"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
