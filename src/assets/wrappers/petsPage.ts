import styled from "styled-components";
// import welcomeImg from "../images/welcome.jpg";
import puppies from "../images/puppies-2.jpg";

const Wrapper = styled.section`
  margin-top: -2rem;
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
    height: 35rem;
    margin-bottom: 5rem;
    width: 100%;
    text-align: center;
    color: var(--primary-3);
    h3 {
      padding: 2rem;
    }
  }

  @media (min-width: 992px) {
    .pets {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  @media (min-width: 1600px) {
    .pets {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .welcome-section {
      height: 45rem;
    }
  }
`;
export default Wrapper;
