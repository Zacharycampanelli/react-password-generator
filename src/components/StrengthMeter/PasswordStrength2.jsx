import React, { useState, useContext } from 'react';
import { PasswordContext } from "../../App";

const isBoolean = (n) => {
  return typeof n === 'boolean';
}

function PasswordStrength2() {
  const passwordContext = useContext(PasswordContext);
  const [strength, setStrength] = useState(2);
  const [strengthText, setStrengthText] = useState('')
  console.log(passwordContext)
  // Create a function to calculate the password strength
  
  
  const calculatePasswordStrength = (password) => {
let state = passwordContext.state;    

      let strengthTexts = [
        "TOO WEAK!",
        "WEAK",
        "MEDIUM",
        "STRONG",
      ];
      console.log(typeof state.uppercase)

     for (let value in state) {
      console.log(state[value])
      if (isBoolean(state[value])) {
        setStrength(prev => prev += 1);
        console.log('yes')
      }
      console.log(strength)
     }
  
      // for ( choice in passwordContext) {
      //   console.log(choice)
      //   if (choices[choice] === true) {
      //     setStrength(prev => prev += 1);
      //     console.log(strength)
      //   }
      // }
      if (state.length >= 8) {
          setStrength(prev => prev += 1);
      }
  console.log(strength)
      return { text: strengthText[strength], value: strength };
    };


  // Create a function to render the password strength meter segments
  const renderSegments = () => {

    const segments = [];

    for (let i = 0; i < strength; i++) {
      const segmentColor = i < strength ? 'green' : 'transparent';
      const outline = i < strength ? 'transparent' : 'white'
      segments.push(<div className="segment" style={{ backgroundColor: segmentColor, width: '5%', height: '1.5rem', marginLeft: '0.5rem', border: `1px solid ${outline}` }} key={i}></div>);
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
    <div>
      {/* <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      /> */}
      <div id="password-strength-meter" className='flex flex-row'>
        {renderSegments()}
      </div>
    </div>
  );
}

export default PasswordStrength2;
