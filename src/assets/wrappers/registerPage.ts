import styled from "styled-components";
import puppies from "../images/pexels-helena-lopes-4453057.jpg";

const Wrapper = styled.section`
  display: grid;
  align-items: center;


  background-image: url(${puppies}); // Use a variável que contém o caminho para a imagem
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;


  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  h1 {
    font-weight: 800;
    span {
      color: var(--primary-7);
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
    border-top: 5px solid var(--primary-5);
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
    color: var(--primary-5);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
