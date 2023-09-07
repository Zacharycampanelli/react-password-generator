import React, { useState } from 'react';

function PasswordStrength2() {
  const [password, setPassword] = useState('');
  const [strengthScore, setStrengthScore] = useState(0);

  // Create a function to calculate the password strength
  const calculatePasswordStrength = (password) => {
    // Replace this with your own password strength calculation logic
    const lengthScore = Math.min(password.length / 8, 1);
    const uppercaseScore = /[A-Z]/.test(password) ? 1 : 0;
    const lowercaseScore = /[a-z]/.test(password) ? 1 : 0;
    const digitScore = /\d/.test(password) ? 1 : 0;
    const specialCharScore = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password) ? 1 : 0;

    const totalScore = lengthScore + uppercaseScore + lowercaseScore + digitScore + specialCharScore;
    return totalScore;
  };

  // Create a function to render the password strength meter segments
  const renderSegments = () => {
    const segments = [];

    for (let i = 0; i < 5; i++) {
      const segmentColor = i < strengthScore ? 'green' : 'lightgray';
      segments.push(<div className="segment" style={{ backgroundColor: segmentColor, width: '10%', height: '2rem', margin: '10px' }} key={i}></div>);
    }

    return segments;
  };

  // Create a function to handle password input changes
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const newStrengthScore = calculatePasswordStrength(newPassword);
    setStrengthScore(newStrengthScore);
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div id="password-strength-meter" className='flex flex-row'>
        {renderSegments()}
      </div>
    </div>
  );
}

export default PasswordStrength2;
