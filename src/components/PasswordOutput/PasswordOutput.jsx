import CopyIcon from "../../assets/images/icon-copy.svg";

const PasswordOutput = ({password}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={password}
        className="input input-ghost  mx-4 mt-4 w-full max-w-xs bg-darkGray p-4 text-left text-md text-white"
      />
      <button onClick={() =>  navigator.clipboard.writeText(password)}>
      <CopyIcon className="absolute right-10 top-10"  />
      </button>

    </div>
  );
};

export default PasswordOutput;
