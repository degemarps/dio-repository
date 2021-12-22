const Button = ({ nome, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {nome}
    </button>
  );
}

export default Button;