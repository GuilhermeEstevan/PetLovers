import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 3rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .photos {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  @media (min-width: 800px) {
    .photos {
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
      row-gap: 1rem;
    }
  }

  @media (min-width: 1400px) {
    .photos {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1800px) {
    .photos {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 2000px) {
    .photos {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
export default Wrapper;
