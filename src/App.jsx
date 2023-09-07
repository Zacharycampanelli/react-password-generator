import React, { useReducer, useState } from "react";
import Header from "./components/Header/Header";
import PasswordOutput from "./components/PasswordOutput/PasswordOutput";
import PasswordInput from "./components/PasswordInput/PasswordInput";
import PasswordStrength2 from "./components/StrengthMeter/PasswordStrength2";

export const PasswordContext = React.createContext();

const initialChoiceState = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false, 
  length: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'USE_UPPERCASE':
      return {...state, uppercase: !state.uppercase}
    case 'USE_LOWERCASE':
      return {...state, lowercase: !state.lowercase}
    case 'USE_NUMBERS':
      return {...state, numbers: !state.numbers}
    case 'USE_SYMBOLS':
      return {...state, symbols: !state.symbols}
    case 'SET_LENGTH':
      return {...state, length: action.payload}
    default: 
      return state
  }
}


function App() {
  const [password, setPassword] = useState("password");
  const [state, dispatch] = useReducer(reducer, initialChoiceState);

  return (
    <PasswordStrength2/>    
    // <PasswordContext.Provider value={{state, dispatch}}>

    // <div className="bg-black">
    //   <div className="container flex flex-col items-center min-w-[90%]">
    //     <Header />
    //     <PasswordOutput password={password} />
    //     <PasswordInput />
       
    //   </div>
    // </div>
    // </PasswordContext.Provider>
  );
}

export default App;
