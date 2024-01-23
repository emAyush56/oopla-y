function ErrorBox({ msg = "Something went wrong", bgColor = "bg-yellow-400" }) {
  return (
    <div
      className={`mx-auto w-fit rounded-full ${bgColor} px-4 py-1.5 text-sm`}
    >
      {msg}
    </div>
  );
}

export default ErrorBox;
