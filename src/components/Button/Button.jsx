import React from 'react';

const Button = ({ onClickAction, children }) => {
  return (
    <button
      className="rounded-lg border-2 font-body text-lg py-2 px-6 hover:bg-accent hover:text-secondary"
      onClick={onClickAction}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
