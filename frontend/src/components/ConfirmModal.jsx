import React, { useEffect } from 'react';
import './ConfirmModal.css';

const ConfirmModal = ({ isOpen, onConfirm, onCancel, message }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onCancel]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onCancel();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-buttons">
          <button
            className="modal-btn confirm"
            onClick={() => {
              console.log('Нажали Да');  // <-- Проверка клика
              onConfirm();
            }}
          >
            Да
          </button>
          <button
            className="modal-btn cancel"
            onClick={() => {
              console.log('Нажали Нет');  // <-- Проверка клика
              onConfirm();
            }}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
