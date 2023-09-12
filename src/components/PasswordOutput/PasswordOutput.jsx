import { useContext } from 'react';
import { PasswordContext } from '../../App';

import { ReactComponent as CopyIcon } from '../../assets/images/icon-copy.svg';

const PasswordOutput = () => {
  const passwordContext = useContext(PasswordContext);

  return (
    <div className="relative md:w-8/12">
      <input
        type="text"
        value={passwordContext.state.password}
        className="input input-ghost mx-4 mt-4 w-full max-w-xs bg-darkGray p-4 pr-16 text-left text-md text-white md:max-w-none md:mx-auto md:mt-6"
        readOnly
      />
      <button onClick={() => navigator.clipboard.writeText(password)}>
        <CopyIcon className="absolute right-10 top-10 md:top-12 md:right-8" />
      </button>
    </div>
  );
};

export default PasswordOutput;
