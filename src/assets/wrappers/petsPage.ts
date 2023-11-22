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
    padding: 2rem; /* Adicione padding ou ajuste conforme necessário */
    margin-top: 2rem; /* Ajuste conforme necessário */
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
