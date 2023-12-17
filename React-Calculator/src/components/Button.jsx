function Button({ buttonSymbol, handleClick, buttonImg, className }) {
  const buttonContent =
    buttonSymbol !== "" ? buttonSymbol : <img src={buttonImg} />;

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {buttonContent}
    </button>
  );
}

export default Button;
