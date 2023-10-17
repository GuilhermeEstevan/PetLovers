import Wrapper from "../assets/wrappers/formPage";
import FormGalleryUpload from "./forms/FormGalleryUpload";

const AddPhotoContainer = () => {
  return (
    <Wrapper>
      <form className="form">
        <h3>Adcionar Nova Foto</h3>
        <div className="addPhoto-center">
          <FormGalleryUpload />
        </div>
        <div className="btn-container">
          <button type="button" className="btn btn-block clear-btn">
            Limpar
          </button>
          <button type="submit" className="btn btn-block submmit-btn">
            Adcionar
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddPhotoContainer;
