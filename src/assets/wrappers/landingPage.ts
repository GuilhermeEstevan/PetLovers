import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 1rem auto;
    height: var(--nav-heigth);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
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
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      margin-top: 5rem;
    }
  }
`;

export default Wrapper;
