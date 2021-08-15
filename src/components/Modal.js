import React from "react";
import closeIcon from "../images/close_icon.png";
import "../styles/Modal.scss";

function Modal({ setIsOpen, children }) {
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <div className="modal">
      <div className="container">
        {children}
        <button className="closeBtn" onClick={closeModal}>
          <img src={closeIcon} alt="close icon" />
          Zavrieť
        </button>
      </div>
    </div>
  );
}

export default Modal;
