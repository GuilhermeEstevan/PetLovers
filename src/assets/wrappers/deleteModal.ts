import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .modal-content {
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    max-width: 400px;
    width: 100%;

    p {
      margin: 20px 0;
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
