import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 90%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  max-width: var(--max-width);
  margin: 0 auto;
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
    width: 15rem;
    margin: 0;
  }
  .form-select {
    width: 15rem;
    text-transform: capitalize;
  }

  .form-center {
    margin-top: 3rem;
    display: grid;
    gap: 1rem;
    row-gap: 1.5rem;
    max-width: 20rem;
    margin-bottom: 2rem;
  }

  .form-imgUpload {
    margin-top: 3rem;
    max-width: 30rem;
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
    max-width: 31.3rem;
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
    width: 140px;
    height: 140px;
    overflow: hidden;
    border-radius: 50%;
    margin-left: 3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .gallery-preview {
    width: 140px;
    height: 140px;
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
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0rem;
    margin-bottom: 2rem;

    img {
      margin-left: 1rem;
    }
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
      grid-template-columns: 1fr 1fr;
    
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

  .calendar {
    width: 15rem;
    margin-top: -1.72rem;
  }

  .calendar-label {
    font-size: 0.8rem;
  }
`;

export default Wrapper;
