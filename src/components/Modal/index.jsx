import React from 'react';
import CrossBtn from '../../assets/cross-btn.png'

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content px-5">
        <span className="close-button " onClick={onClose}>
          <img src={CrossBtn} alt='' />
        </span>
        {content}
      </div>
    </div>
  );
}

export default Modal;