import styled from "styled-components";
import bg from "../images/paws-2.png";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;

    /* Adicione a imagem de plano de fundo aqui */
    background-image: url(${bg});
    background-size: contain; /* Ajuste o tamanho da imagem para cobrir todo o elemento */
    background-repeat: repeat; 
    background-attachment: local;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
    opacity: 0.9;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
