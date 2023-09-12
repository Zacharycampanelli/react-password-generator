import React, { useContext } from 'react';
import { PasswordContext } from '../../App';

function Slider() {
  const passwordContext = useContext(PasswordContext);

  const handleChange = (event) => {
    passwordContext.dispatch({
      type: 'SET_LENGTH',
      payload: event.target.value,
    });
  };

  const fillStyle = {
    width: `${passwordContext.state.length * (100 / 40)}%`,
    zIndex: 10,
  };

  return (
    <div className="w-100">
      <div className="flex justify-between">
        <label htmlFor="slider" className="text-2xs text-white md:text-xs">
          Character Length
        </label>
        <p className="text-md text-green">{passwordContext.state.length}</p>
      </div>
      <div className="relative  mt-5 h-2 rounded-full bg-black">
        <div className="absolute h-2 rounded-full bg-green " style={fillStyle}></div>
      </div>
      <input
        type="range"
        id="slider"
        className="mt-2 w-full appearance-none bg-none focus:outline-none"
        min="0"
        max="40"
        value={passwordContext.state.length}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
