import styled from "styled-components";

const Wrapper = styled.article`
  .photo {
    position: relative;
    height: 20rem;
    width: 20rem;
    margin: 0 auto;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 5%;
      transition: var(--transition);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      opacity: 0;
      transition: opacity 0.3s ease;

      button {
        padding: 10px;
        margin: 5px;
        cursor: pointer;
      }
    }

    &:hover .overlay {
      opacity: 1;
    }

    &:hover img {
      filter: brightness(0.5);
    }
  }

  .download-btn,
  .delete-btn {
    border: none;
    color: var(--grey-8);
    font-size: 2rem;
    background: transparent;
  }
`;

export default Wrapper;
