const Button = ({ nome, className }) => {
  return (
    <button type="button" className={className}>
      {nome}
    </button>
  );
}

export default Button;