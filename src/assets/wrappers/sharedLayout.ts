import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    background-color: #e5e7e8;
  }
  .dashboard-page {
    margin: 0 auto;
    padding: 2rem 0;
    min-height: 100vh ; /* Defina min-height para garantir que o elemento cubra pelo menos a altura da viewport */
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  }
`;
export default Wrapper;
