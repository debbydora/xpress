import React from "react";

function Button({ text, className, onClick, icon }) {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
