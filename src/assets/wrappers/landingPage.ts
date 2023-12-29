import styled from "styled-components";
import puppies from "../images/bannerDogmedium.jpg";
import petGallery from "../images/petGallery.jpg";
import petCard from "../images/catinho.jpg";
import adoption from "../images/woman-holding-adopt-me-sign-while-sitting-cute-dogs.jpg";
import dogFooter from "../images/cute-sweet-puppy-australianmedium.jpg";

const Wrapper = styled.main`
  nav {
    background: var(--primary-2);

    height: 5rem;
    display: flex;
    align-items: center;

    .nav-content {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  }

  h1 {
    font-weight: 800;
    span {
      color: var(--primary-5);
    }
  }
  p {
    color: var(--grey-4);
    text-align: left;
    font-weight: 600;
    margin: 3rem 0;
  }

  .banner {
    background: #454f5b;
    height: 60vh;
    min-height: 30rem;
    background-image: url(${puppies});
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    p {
      color: var(--white);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    }

    .register-btn {
      cursor: pointer;
      color: var(--white);
      font-weight: 500;
      background: var(--primary-2);
      border: transparent;
      border-radius: 10%;
      padding: 0.8rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      text-transform: uppercase;
      display: inline-block;
    }
  }

  .register-btn:hover {
    box-shadow: var(--shadow-4);
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: column;
    border-radius: 10%;
  }

  .logo-text {
    display: flex;
    align-items: center;
    font-size: 3rem;
  }
  h3 {
    font-weight: 800;
    span {
      color: var(--primary-7);
    }
  }
  .pawn-icon {
    font-size: 3rem;
    margin-left: 4px;
  }

  .info {
    height: 35vh;
    min-height: 20rem;
    text-align: center;

    .info-text {
      margin-top: 3rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .info-box {
      padding: 1rem;
      box-shadow: var(--shadow-3);
      border-radius: var(--borderRadius);
    }

    h4 {
      color: var(--grey-4);
      font-size: 2rem;
      padding: 1rem;
    }
    p {
      margin: 0 auto;
      text-align: center;
      color: var(--grey-5);
      z-index: 10;
      max-width: 28rem;
      font-size: 0.8rem;
    }

    .paw-image {
      position: absolute;
      top: -2;
      right: 0;
      width: 150px; /* ou o tamanho desejado da imagem */
      opacity: 0.2;
    }
  }

  .our-services {
    margin-top: 10rem;
    min-height: 30rem;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .service {
      flex: 1; /* Faz cada serviço ocupar o mesmo espaço disponível */
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .petCard {
      background-image: url(${petCard});
      background-size: cover;
      background-position: center;
      background-repeat: repeat;
      opacity: 0.7;
    }

    .petGallery {
      background-image: url(${petGallery});
      background-size: cover;
      background-position: bottom;
      background-repeat: repeat;
      opacity: 0.7;
    }

    .petAdoption {
      background-image: url(${adoption});
      background-size: cover;
      background-position: center;
      background-repeat: repeat;
      opacity: 0.7;
    }

    .petCard,
    .petGallery,
    .petAdoption {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      box-shadow: var(--shadow-3);
    }

    .service-desc {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 20%;
      border-radius: var(--borderRadius);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(
          0,
          0,
          0,
          0.2
        ); /* Cor preta com 50% de opacidade para escurecimento */
        z-index: 1; /* Garante que a sobreposição esteja acima do conteúdo */
      }
    }

    h4 {
      color: var(--white);
      /* background: white; */
      font-weight: 800;
      padding: 0.4rem;
      border-radius: var(--borderRadius);
      font-size: 1.2rem;
      margin-top: 0.8rem;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    @media (min-width: 800px) {
      flex-direction: row;
      height: 35vh;
      margin: 0 auto;
      max-width: 1600px;

      .petAdoption {
        background-position: center;
      }
    }
  }

  footer {
    position: relative;
    margin-top: 5rem;
    background: #f2f2f2;
  }

  .footer-info {
    min-height: 20vh;
    background: var(--primary-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url(${dogFooter});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .copyright {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    p {
      margin-bottom: 20px;
      max-width: 8rem;
      font-size: 0.7rem;
      color: var(--grey-6);
    }

    .logo-text {
      display: flex;
      align-items: center;
    }
    h3 {
      font-size: 1rem;
      font-weight: 800;
      span {
        color: var(--primary-5);
      }
    }
    .pawn-icon {
      font-size: 1.2rem;
      margin-left: 4px;
    }
  }

  .contact {
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    a {
      font-size: 2rem;
      margin: 0.5rem 0;
      text-decoration: none;
    }

    .linkedin {
      color: #0077b5;
    }
    .github {
      color: #24292e;
    }
  }

  @media (min-width: 500px) {
    .copyright {
      p {
        max-width: 18rem;
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 992px) {
    .page {
      column-gap: 3rem;
    }

    .our-services {
      h4 {
        font-size: 1rem;
      }
    }

    .info {
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1400px) {
    footer {
      background-size: cover;
      background-position: center 60%;
      background-repeat: no-repeat;
    }
  }
`;

export default Wrapper;
