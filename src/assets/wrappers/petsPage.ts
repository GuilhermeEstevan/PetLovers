import styled from "styled-components";
import puppies from "../images/puppies-2.jpg";

const Wrapper = styled.section`
  margin-top: -2rem;
  min-height: 100vh;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }

  .pets {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-around;
    row-gap: 2rem;
    gap: 2rem;
    width: 90%;
    opacity: 0.9;
  }

  .welcome-section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${puppies});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 20rem;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
  }
  p {
    display: inline-block;
    margin: 0 auto;
    font-family: "Bevan", serif;
    font-size: 1.5rem;
    color: var(--primary-3);
    border-radius: var(--borderRadius);
    margin-top: 2rem;
    border-bottom: 1px solid var(--grey-7);
    padding: 0rem 2rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  .pets-container {
    display: flex;
    flex-direction: column;
  }

  .page-controller {
    display: flex;
    justify-content: center;
    padding: 1rem;
    color: var(--grey-5);
  }

  .page-btn {
    margin: 0.2rem;
    padding: 0.5rem 1rem;
    background: var(--primary-4);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .page-btn:disabled {
    background-color: #ddd; /* Cor de fundo quando desativado */
    color: #999; /* Cor do texto quando desativado */
  }

  .current-page {
    padding: 0.4rem 1rem;
  }

  .empty-pet {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: var(--grey-2);
    h4 {
      margin: 2rem 0;
    }
    .adoption-photo {
      width: 185px;
      height: 185px;
      overflow: hidden;
      border-radius: 50%;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: var(--transition);
      &:hover {
        filter: brightness(0.8); /* Torna a imagem mais escura no hover */
        cursor: pointer;
      }
    }

    @media (min-width: 880px) {
      .adoption-photo {
        width: 320px;
        height: 320px;
      }
    }
  }

  @media (min-width: 880px) {
    .welcome-section {
      background-size: cover;
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    .welcome-section {
      height: 25rem;
    }
    p {
      font-family: "Bevan", serif;
      font-size: 2rem;
    }
  }
  @media (min-width: 1200px) {
    .welcome-section {
      height: 30rem;
    }
  }

  @media (min-width: 1600px) {
    .welcome-section {
      height: 40rem;
    }
  }
`;
export default Wrapper;
