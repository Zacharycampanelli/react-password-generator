import { useContext } from 'react';
import { PasswordContext } from '../../App';
import CopyIcon from '../../assets/images/CopyIcon';

const PasswordOutput = () => {
  const passwordContext = useContext(PasswordContext);


  const copyButtonHandler = () => {
    if (passwordContext.state.password.length > 0) {
      navigator.clipboard.writeText(passwordContext.state.password);
      passwordContext.dispatch({ type: 'SET_COPIED', payload: 'COPIED' });
    }
  };

  return (
    <div className="relative md:w-8/12 lg:w-5/12">
      <input
        type="text"
        placeholder="P4$5W0rD!"
        value={passwordContext.state.password}
        className="input input-ghost mx-4 mt-4 w-full max-w-xs bg-darkGray p-4 pr-16 text-left text-md text-white md:mx-auto md:mt-6 md:max-w-none md:p-8"
        readOnly
      />
      <div>
        <span className="absolute right-10 top-10 ml-4 text-xs text-green md:right-16 md:top-16">
          {passwordContext.state.copied}
        </span>
        <button
          className="backgroundColor:white absolute right-10  top-10 fill-white md:right-8 md:top-16"
          onClick={() => {
            copyButtonHandler();
          }}
        >
          <CopyIcon />
        </button>
      </div>
    </div>
  );
};

export default PasswordOutput;
