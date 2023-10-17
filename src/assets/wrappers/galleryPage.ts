import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .photos {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
  }

  @media (min-width: 800px) {
    .photos {
      justify-content: center; /* Centralizar as imagens horizontalmente */
      gap: 1rem;
    }

    .photo {
      flex: 1;
    }
  }

  @media (min-width: 1400px) {
    .photo {
      flex: 1;
    }
  }

  @media (min-width: 1800px) {
    .photo {
      flex: 1;
    }
  }

  @media (min-width: 2000px) {
    .photo {
      flex: 1;
    }
  }
`;
export default Wrapper;
