import styled from "styled-components";

const Wrapper = styled.article`
  font-family: "Roboto";
  /* background: var(--white); */
  border: 1px solid var(--grey-8);
  border-radius: var(--borderRadius);
  width: 22rem;
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-4);
  margin: 0 auto;

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-1);
    display: grid;
    /* grid-template-columns: 3fr 1fr; */
    place-content: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .pet-image {
    width: 185px;
    height: 185px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      transition: var(--transition);
    }

    .eye-icon {
      color: var(--grey-8);
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      transition: opacity 0.5s;
    }

    &:hover {
      img {
        filter: brightness(0.5); /* Torna a imagem mais escura no hover */
      }

      .eye-icon {
        opacity: 1; /* Mostra o ícone do olho no hover */
      }
    }
  }

  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 4rem;
    h3 {
      font-size: 2.2rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.2rem;
      /* margin-top: 2rem; */
      text-transform: capitalize;
      color: var(--grey-4);
      letter-spacing: var(--letterSpacing);
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
    margin: 1rem 0;
    display: flex;
    justify-content: center;
  }

  .btn {
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  .info-btn,
  .gallery-btn,
  .profile-btn {
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
  .profile-btn {
    color: var(--black);
    background-color: var(--primary-6);
    padding: 1rem;
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
