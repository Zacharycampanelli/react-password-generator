import React, { useState, useContext, useEffect } from 'react';
import { PasswordContext } from '../../App';

function StrengthMeter() {
  const passwordContext = useContext(PasswordContext);
  const [strength, setStrength] = useState(2);
  const [strengthText, setStrengthText] = useState('');
  // Create a function to calculate the password strength

  useEffect(() => {
    calculatePasswordStrength();
  }, [passwordContext.state.password]);

  const calculatePasswordStrength = () => {
    let state = passwordContext.state;
    let counter = 0;
    let strengthTexts = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

    // Add a point for each checkbox option selected
    for (let value in state) {
      if (value === 'password' || value === 'length') continue;
      if (state[value] === true) counter++;
    }

    // Earn a point if length is 8 or greater
    if (state.length >= 8) {
      counter++;
    }

    // There are 4 options for password strength but 5 ways to improve the strength
    // score. Password strength will be based on score 2-5
    counter--;
    // If first run of application, stops meter from giving a score
    if (passwordContext.state.password === 0) counter = -1;
    // If only one option selected and length is less than 8, ensures user is still given a score
    if (counter === 0) counter = 1;
    setStrength(counter);

    // Array is zero based, subtract 1 to align score with strengthText
    counter--;
    setStrengthText(strengthTexts[counter]);
  };

  const getFillColor = () => {
    let fill = '';
    switch (strength) {
      case 0:
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
  };

  // Create a function to render the password strength meter segments
  const renderSegments = () => {
    const segments = [];
    let fill = getFillColor();
    for (let i = 0; i < 4; i++) {
      const segmentColor = i < strength ? fill : 'transparent';
      const outline = i < strength ? 'transparent' : 'white';
      segments.push(
        <div
          className="segment mt-0.5 h-6 md:mt-1 md:h-7"
          style={{
            backgroundColor: segmentColor,
            width: '0.6rem',
            marginLeft: '0.35rem',
            border: `2px solid ${outline}`,
          }}
          key={i}
        ></div>,
      );
    }

    return segments;
  };

  return (
    <div className="bg-veryDarkGray mb-4 mt-8 flex items-center justify-between p-4 text-2xs text-gray md:mb-8 md:p-6 md:text-xs">
      <p>STRENGTH</p>
      <div className="flex justify-items-center">
        <p className="text-xs text-white md:text-md">{strengthText}</p>
        <div id="password-strength-meter" className="flex flex-row ">
          {renderSegments()}
        </div>
      </div>
    </div>
  );
}

export default StrengthMeter;
