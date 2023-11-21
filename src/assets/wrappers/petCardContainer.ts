import styled from "styled-components";

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: var(--borderRadius);
  background: var(--white);
  padding: 2rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  max-width: var(--max-width);


  .pet-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    text-transform: capitalize;
  }

  .pet-table th,
  .pet-table td {
    padding: 8px;
    text-align: left;
    border: 1px solid var(--grey-9);
  }

  .pet-table th {
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
`;

export default Wrapper;
