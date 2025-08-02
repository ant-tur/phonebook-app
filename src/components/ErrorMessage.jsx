const ErrorMessage = ({ message }) => {
  if (message === null) return;

  return <div className="notification error">{message}</div>;
};

export default ErrorMessage;
