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
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    height: 25rem;
    width: 100%;
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
    padding: 2rem; /* Adicione padding ou ajuste conforme necessário */
    margin-top: 2rem; /* Ajuste conforme necessário */
  }

  @media (min-width: 992px) {
    .welcome-section {
      height: 35rem;
    }
    p {
      font-family: "Bevan", serif;
      font-size: 2rem;
    }
  }

  @media (min-width: 1600px) {
    /* .pets {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    } */

    .welcome-section {
      height: 40rem;
    }
  }
`;
export default Wrapper;
