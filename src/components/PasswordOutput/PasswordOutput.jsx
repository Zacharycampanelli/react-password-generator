import { useContext } from "react";
import { PasswordContext } from "../../App";

import {ReactComponent as CopyIcon} from "../../assets/images/icon-copy.svg";

const PasswordOutput = () => {
  const passwordContext = useContext(PasswordContext);

  return (
    <div className="relative">
      <input
        type="text"
        value={passwordContext.state.password}
        className="input input-ghost  mx-4 mt-4 w-full max-w-xs bg-darkGray p-4 text-left text-md text-white"
      />
      <button onClick={() =>  navigator.clipboard.writeText(password)}>
      <CopyIcon className="absolute right-10 top-10"  />
      </button>

    </div>
  );
};

export default PasswordOutput;
