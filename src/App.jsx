import { createContext, useReducer } from 'react';
import Header from './components/Header/Header';
import PasswordOutput from './components/PasswordOutput/PasswordOutput';
import PasswordInput from './components/PasswordInput/PasswordInput';

export const PasswordContext = createContext();

const initialChoiceState = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
  length: 0,
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USE_UPPERCASE':
      return { ...state, uppercase: !state.uppercase };
    case 'USE_LOWERCASE':
      return { ...state, lowercase: !state.lowercase };
    case 'USE_NUMBERS':
      return { ...state, numbers: !state.numbers };
    case 'USE_SYMBOLS':
      return { ...state, symbols: !state.symbols };
    case 'SET_LENGTH':
      return { ...state, length: parseInt(action.payload) };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialChoiceState);

  return (
    <PasswordContext.Provider value={{ state, dispatch }}>
      <div className="flex flex-col items-center justify-center bg-black">
        <Header />
        <PasswordOutput />
        <PasswordInput />
      </div>
    </PasswordContext.Provider>
  );
}

export default App;
