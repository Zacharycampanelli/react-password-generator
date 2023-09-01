import React, { useContext } from "react";
import { PasswordContext } from "../../App";

function Slider() {
  const passwordContext = useContext(PasswordContext);

  const handleChange = (event) => {
    passwordContext.dispatch({type: 'SET_LENGTH', payload: event.target.value});
  };

  const fillStyle = {
    width: `${passwordContext.state.length * (100/40)}%`,
    // marginTop: "19px",
    zIndex: 10,
  };

  return (
    <div className="w-100">
      <div className="flex justify-between">
        <label htmlFor="slider" className="text-2xs text-white">
          Character Length
        </label>
        <p className="text-green text-md">{passwordContext.state.length}</p>
      </div>
      <div className="relative  h-2 rounded-full bg-black mt-5">
        <div
          className="bg-green absolute h-2 rounded-full "
          style={fillStyle}
        ></div>
      </div>
      <input
        type="range"
        id="slider"
        className="mt-2 w-full appearance-none bg-none focus:outline-none "
        min="0"
        max="40"
        value={passwordContext.state.length}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
