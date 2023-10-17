import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 2rem;

  .pet-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
  }

  .pet-table th,
  .pet-table td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }

  .pet-table th {
    background-color: var(--grey-5);
  }

  .pet-table tbody tr:nth-child(even) {
    background-color: var(--grey-8);
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
