import React from "react";

function Input({ id, type, placeholder, inputName, label }) {
  return (
    <div className="">
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} name={inputName} id={id} />
    </div>
  );
}

export default Input;
