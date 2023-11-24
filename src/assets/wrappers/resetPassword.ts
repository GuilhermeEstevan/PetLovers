import styled from "styled-components";
import bg from "../images/labrador-retriever.jpg";

const Wrapper = styled.section`
  display: grid;
  align-items: center;

  background-image: url(${bg}); // Use a variável que contém o caminho para a imagem
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    opacity: 0.8;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  h1 {
    font-weight: 800;
    span {
      color: var(--primary-5);
    }
  }

  p {
    color: var(--grey-4);
    text-align: left;
    font-weight: 600;
    margin: 3rem 0;
  }
  .pawn-icon {
    font-size: 4rem;
  }

  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-2);
    background: rgba(
      255,
      255,
      255,
      0.8
    ); /* Altere o valor "0.7" para ajustar a transparência */
    padding: 1rem; /* Adicione algum preenchimento para tornar o conteúdo visível */
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 2rem;
    font-weight: 600;
  }
  .member-btn {
    background: transparent;
    font-weight: 800;
    border: transparent;
    color: var(--primary-3);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  .forget-password {
    display: flex;
    margin-top: -1.4rem;
    p {
      cursor: pointer;
    }
  }

  .reset-password {
    margin: 0 auto;
    p {
      margin-bottom: 2rem;
      max-width: 20rem;
    }
  }

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
`;
export default Wrapper;
