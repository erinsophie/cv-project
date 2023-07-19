import React from 'react';

function Button({ show, className, onClick, children }) {
  if (!show) return null;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
