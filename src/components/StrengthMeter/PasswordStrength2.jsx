import React, { useState, useContext, useEffect } from "react";
import { PasswordContext } from "../../App";

const isBoolean = (n) => {
  return typeof n === "boolean";
};

function PasswordStrength2() {
  const passwordContext = useContext(PasswordContext);
  const [strength, setStrength] = useState(2);
  const [strengthText, setStrengthText] = useState("");
  console.log(passwordContext);
  // Create a function to calculate the password strength

  useEffect(() => {
    calculatePasswordStrength();
  }, [passwordContext.state.password]);

  const calculatePasswordStrength = () => {
    let state = passwordContext.state;
    let counter = 0;
    let strengthTexts = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

    for (let value in state) {
      // console.log(value)
      // console.log(state[value])
      if (value === "password" || value === "length") continue;
      if (state[value] === true) counter++;
    }

    if (state.length >= 8) {
      counter++;
    }
    // There are 4 options for password strength but 5 ways to improve the strength
    // score. Password strength will be based on score 2-5
    counter--;
    setStrength(counter);
    // Array is zero based, subtract 1 to align score with strengthText
counter--;
    setStrengthText(strengthTexts[counter])
  };

  const getFillColor = () => {
    let fill = '';
    switch(strength) {
      case 1: 
        fill = '#F64A4A';
        break;
      case 2: 
        fill = '#FB7C58';
        break;
      case 3: 
        fill = '#F8CD65';
        break;
      case 4: 
        fill = '#A4FFAF';
        break;
      default: 
        fill = 'transparent';
        break;
    }
    return fill;
  }

  // Create a function to render the password strength meter segments
  const renderSegments = () => {
    // calculatePasswordStrength()
    const segments = [];
    let fill = getFillColor()
    for (let i = 0; i < 4; i++) {
      const segmentColor = i < strength ? fill : "transparent";
      const outline = i < strength ? "transparent" : "white";
      segments.push(
        <div
          className="segment"
          style={{
            backgroundColor: segmentColor,
            width: "0.5rem",
            height: "1.5rem",
            marginLeft: "0.35rem",
            border: `2px solid ${outline}`,
          }}
          key={i}
        ></div>,
      );
    }

    return segments;
  };

  // Create a function to handle password input changes
  // useEffect((e) => {
  //   const newPassword = e.target.value;
  //   setPassword(newPassword);
  //   const newStrengthScore = calculatePasswordStrength(newPassword);
  //   console.log(newStrengthScore)
  //   setStrength(newStrengthScore);
  // }, [password]);

  return (
    // <div>
    //   {strengthText}
      // <div id="password-strength-meter" className="flex flex-row">
      //   {renderSegments()}
      // </div>
    // </div>


<div className="flex bg-black text-2xs text-gray justify-between items-center p-4">
<p>STRENGTH</p>

<div className="flex">
  <p className="text-xs text-white">{strengthText}</p>
  {/* <div className="flex justify-between "> */}

 
<div id="password-strength-meter" className="flex flex-row ">
        {renderSegments()}
      </div>
  </div>
</div>
// </div>
  );
}

export default PasswordStrength2;
