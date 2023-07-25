import React from 'react';
import '../styles/buttons.css';

function Button({ show, className, onClick, children }) {
  if (!show) return null;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
