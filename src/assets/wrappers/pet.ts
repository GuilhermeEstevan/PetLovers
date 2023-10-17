import styled from "styled-components";

const Wrapper = styled.article`
  font-family: "Pacifico";
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-1);
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .pet-image {
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.2rem;
      margin-top: 2rem;
      text-transform: capitalize;
      color: var(--grey-4);
      letter-spacing: var(--letterSpacing);
    }
  }
  /* .age {
    background: #fcefc7;
    color: #e9b949;
  }
  .color {
    background: #e0e8f9;
    color: #647acb;
  } */
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 0.5rem;
  }
  footer {
    margin-top: 3rem;
    display: flex;
  }

  .btn {
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  .info-btn,
  .gallery-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 35px;
  }
  .info-btn {
    color: var(--white);
    font-weight: 400;
    background: var(--primary-3);
    margin-right: 0.5rem;
    letter-spacing: 0.25rem;
  }
  .gallery-btn {
    color: var(--white);
    background: var(--grey-4);
    letter-spacing: 0.25rem;
  }
  &:hover .actions {
    visibility: visible;
  }
  .galery-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export default Wrapper;
