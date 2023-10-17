import styled from "styled-components";

const Wrapper = styled.article`
  .photo {
    border: 2px solid var(--grey-4); /* Cor da moldura */
    border-radius: 20px;
    background-color: var(--white);
    margin: 2px; /* Espaço entre as fotos */
    height: 350px;
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 10px;
      display: block;
      object-fit: cover;
      margin: 10px; /* Espaço entre a imagem e a moldura */
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.7)
    }
  }
`;

export default Wrapper;
