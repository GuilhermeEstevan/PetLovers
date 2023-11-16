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
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    width: 90%;
    opacity: 0.9;
  }

  .welcome-section {
    background-image: url(${puppies});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 25rem;
    margin-bottom: 3rem;
    width: 100%;
    text-align: center;
    h3 {
      color: var(--primary-3);
      display: block;
      font-weight: 900;
      font-size: 1.5rem;
      padding-top: 3rem;
    }
  }

  @media (min-width: 992px) {
    .pets {
      display: grid;
      grid-template-columns: 1fr 1fr ;
      gap: 2rem;
    }

    .welcome-section{
      height: 35rem;

      h3{
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 1400px) {
    .pets {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }


  @media (min-width: 1600px) {
    .pets {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }

    .welcome-section {
      height: 45rem;
    }
  }

  @media (min-width: 2000px) {
    .pets {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2rem
    }
  }

`;
export default Wrapper;
