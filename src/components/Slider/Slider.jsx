import React, { useState } from "react";

function Slider() {
  const [rangeValue, setRangeValue] = useState(50);

  const handleChange = (event) => {
    setRangeValue(event.target.value);
  };

  const fillStyle = {
    width: `${rangeValue}%`,
    marginTop: "19px",
    zIndex: 10,
  };

  return (
    <div className="w-100">
      <div className="flex justify-between">
        <label htmlFor="slider" className="text-2xs text-white">
          Character Length
        </label>
        <p className="text-green text-md">{rangeValue}</p>
      </div>
      <div className="relative mt-0 h-2 rounded-full bg-none ">
        <div
          className="bg-green absolute h-2 rounded-full"
          style={fillStyle}
        ></div>
      </div>
      <input
        type="range"
        id="slider"
        className="mt-2 w-full appearance-none bg-none focus:outline-none "
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
