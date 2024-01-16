import "./Modal.css";

interface Props{
    statusModal: string,
    modalMessage: string,
    setModal: React.MouseEventHandler,
}

const Modal = ({modalMessage, statusModal, setModal}: Props) => {
  return (
    <div className="modal-screen">
      <div className={`modal-container-${statusModal}`}>
        <div className="modal-content">
          <h2>
            <strong>Sin acceso!</strong>
          </h2>
          <p>
            {modalMessage}
          </p>
          <div className="button-container">
            <button onClick={setModal}>Salir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
