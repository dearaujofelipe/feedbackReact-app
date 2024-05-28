function Button({ children, version, type, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version ? version : 'primary'}`}
    >
      {children}
    </button>
  );
}
export default Button;
