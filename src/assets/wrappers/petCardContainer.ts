import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: var(--borderRadius);
  background: var(--white);
  padding: 2rem 1rem;
  box-shadow: var(--shadow-2);
  max-width: var(--max-width);

  .pet-table {
    width: 100%;
    border-collapse: collapse;
    border: 3px solid #ddd;
    text-transform: capitalize;
    box-shadow: var(--shadow-3);
  }

  .pet-table td {
    padding: 8px 8px;
    text-align: left;
    border: 1px solid var(--grey-9);
    text-align: center;
  }

  .pet-table th {
    padding: 8px 8px;
    text-align: center;
    border: 1px solid var(--grey-9);
    color: var(--white);
    font-weight: 400;
    background-color: var(--primary-2);
  }

  .pet-table tbody tr:nth-child(odd) {
    background-color: var(--white);
  }
  .pet-table tbody tr:nth-child(even) {
    background-color: var(--primary-8);
  }

  .pet-table th:last-child {
    width: 1rem;
    text-align: center;
  }

  .cardBtns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .edit-btn {
    background-color: transparent;
    color: var(--green-dark);
    box-shadow: none;
  }
  .delete-btn {
    background-color: transparent;
    color: var(--red-dark);
    box-shadow: none;
  }

  .service-selector {
    background: var(--primary-2);
    color: var(--white);
    border: none;
    padding: 0.3rem 0;
  }

  .page-controller {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .page-btn {
    margin: 0.2rem;
    padding: 0.5rem 1rem;
    background: var(--primary-6);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .page-btn:disabled {
    background-color: #ddd; /* Cor de fundo quando desativado */
    color: #999; /* Cor do texto quando desativado */
  }

  .current-page {
    padding: 0.4rem 1rem;
  }

  .custom-select {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  .selected-option {
    width: 100%;
    padding: 0.5rem ;
    cursor: pointer;
    background: var(--primary-2);
    color: var(--white);
    display: flex;
    align-items: center; /* Adiciona alinhamento vertical ao texto e ao ícone */
    justify-content: space-between;
  }

  .options {
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    color: var(--white);
    background-color: var(--primary-2);
  }

  .options > div {
    padding: 0.5rem;
    cursor: pointer;
  }

  .options > div:hover {
    background-color: var(--primary-3);
  }

  .date-sort {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-right: 5px;
    }
  }

  @media (min-width: 500px) {
    width: 90%;
    padding: 2rem 2rem 4rem;

    .cardBtns {
      flex-direction: row;
    }

    .pet-table th {
      padding: 8px 0px;

      font-weight: 400;
      &:not(:first-child):not(:last-child) {
        /* Apply padding to all th except the first one */
        padding-left: 2px;
      }
    }
  }
`;

export default Wrapper;
