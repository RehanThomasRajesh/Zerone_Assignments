// CustomModal.jsx
import React from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;
