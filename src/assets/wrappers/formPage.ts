import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  max-width: var(--max-width);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }

  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--black);
  }
  .clear-btn:hover {
    background: var(--grey-5);
  }
  .pet-image-preview {
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 50%;
    margin: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .gallery-preview {
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 10%;
    margin: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .addPhoto-center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem 0;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
    .btn-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      align-self: flex-end;
      margin-top: 2.5rem;
      button {
        height: 35px;
      }
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    /* border: 1px solid var(--grey-2); */
    display: flex;
    align-items: baseline;
  }
`;

export default Wrapper;
