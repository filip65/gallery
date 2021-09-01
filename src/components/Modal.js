import React from "react";
import closeIcon from "../images/close_icon.svg";
import "../styles/Modal.scss";

import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

function Modal({ setIsOpen, isOpen, children }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      closeModalEsc={true}
      shouldCloseOnOverlayClick={false}
      overlayClassName={"modal"}
      className={"container"}
    >
      {children}
      <button className="closeBtn" onClick={closeModal}>
        <img src={closeIcon} alt="close icon" />
        Zavrieť
      </button>
    </ReactModal>
  );
}

export default Modal;
