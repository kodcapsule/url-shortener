function Button({ buttonText, btn_primary }) {
  return (
    <a className={`navLink btn rounded-full ${btn_primary}   `}>{buttonText}</a>
  );
}

export default Button;
