import Wrapper from "../assets/wrappers/deleteModal";

type TDeleteConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  text: string;
};

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  text,
}: TDeleteConfirmationModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <div className="modal-content">
        <p>{text}</p>
        <div className="btn-container">
          <button className="btn btn-block btn-danger" onClick={onConfirm}>
            Sim
          </button>
          <button className="btn btn-block" onClick={onClose}>
            Não
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default DeleteConfirmationModal;
