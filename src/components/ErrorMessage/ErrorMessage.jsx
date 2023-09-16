const ErrorMessage = ({ error }) => {
  if (error === '') return;

  return <div className="text-center pb-2 text-red">{error}</div>;
};

export default ErrorMessage;
