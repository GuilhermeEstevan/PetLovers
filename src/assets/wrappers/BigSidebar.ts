import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .sidebar-container {
      background: var(--primary-3);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      align-items: start;
      position: relative;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #bfd7ea;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-6);
    }
    .nav-link:hover .icon {
      color: var(--primary-6);
    }
    .icon {
      font-size: 2rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--primary-6);
    }
    .active .icon {
      color: var(--primary-6);
    }

    .sidebar-img {

      position: fixed; 
      bottom: 0; /* Posiciona a imagem na parte inferior */
      left: 0; /* Você pode ajustar o posicionamento horizontal conforme necessário */
      width: 100%; /* Define a largura como 100% para ocupar toda a largura da container */
  

      img {
        width: 300px;
      }
    }
  }
`;
export default Wrapper;
