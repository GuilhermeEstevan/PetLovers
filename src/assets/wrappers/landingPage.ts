import styled from "styled-components";
import puppies from "../images/bannerDogmedium.jpg";
import petGallery from "../images/petGallery.jpg";
import petCard from "../images/catinho.jpg";
import adoption from "../images/adoption.jpg";
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

  .logo {
    width: 6rem;
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
  }
  h3 {
    font-weight: 800;
    span {
      color: var(--primary-7);
    }
  }
  .pawn-icon {
    font-size: 1.5rem;
    margin-left: 4px;
  }

  .info {
    height: 35vh;
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
    height: 30vh;
    display: flex;

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

    h4 {
      color: var(--grey-3);
      background: white;
      font-weight: 800;
      padding: 0.4rem;
      border-radius: var(--borderRadius);
      font-size: 0.8rem;
      margin-top: 2rem;
      text-align: center;
    }
  }

  footer {
    position: relative;
    margin-top: 5rem;
    background: #f2f2f2;
  }

  .footer-info {
    height: 20vh;
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
      /* max-width: 15rem; */
      margin-bottom: 20px;
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
    padding: 2rem;

    a {
      font-size: 2rem;
      text-decoration: none;
    }

    .linkedin {
      color: #0077b5;
    }
    .github {
      color: #24292e;
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
