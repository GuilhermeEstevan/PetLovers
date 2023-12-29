import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .sidebar-container {
      background: var(--primary-2);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;

      .sidebar-img {
        display: block;
        transform: translateX(0);
      }
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
      bottom: 0;
      left: 0;
      margin-bottom: -1rem;
      transition: var(--transition);
      transform: translateX(-250px);

      img {
        width: 300px;
        display: none;
      }
    }

    @media (min-height: 700px) {
      .sidebar-img {
        img {
          display: block;
        }
      }
    }
  }
`;
export default Wrapper;
