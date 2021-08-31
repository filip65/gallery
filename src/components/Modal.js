import React, { useEffect } from "react";
import closeIcon from "../images/close_icon.svg";
import "../styles/Modal.scss";

function Modal({ setIsOpen, children }) {
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "visible";
  };

  const closeModalEsc = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => closeModalEsc(e));
    return () => {
      document.removeEventListener("keydown", (e) => closeModalEsc(e));
    };
  }, []);

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
