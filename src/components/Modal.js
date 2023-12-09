import React from 'react';
import './Modal.js.css';

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;