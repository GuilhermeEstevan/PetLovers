import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    img {
      width: 35px;
    }

    /* svg {
      color: var(--grey-4);
    } */
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
