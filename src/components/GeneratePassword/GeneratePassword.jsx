import { useContext, useState } from 'react';
import { PasswordContext } from '../../App';
import ArrowRightIcon from '../../assets/images/ArrowRightIcon';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
const lower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const upper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

const GeneratePassword = () => {
  const passwordContext = useContext(PasswordContext);

  const [error, setError] = useState('');

  let state = passwordContext.state;

  // Creates an array of possible choices for the final password
  const createOptions = () => {
    const options = [];
    if (state.lowercase) {
      options.push(...lower);
    }
    if (state.uppercase) {
      options.push(...upper);
    }
    if (state.numbers) {
      options.push(...numeric);
    }
    if (state.symbols) {
      options.push(...special);
    }
    selectCharacters(options);
  };

  // Creates the password based off of possible choices
  const selectCharacters = (options) => {
    const length = passwordContext.state.length;
    let password = [];
    for (let i = 0; i < length; i++) {
      password.push(options[Math.floor(Math.random() * options.length)]);
    }
    verifyPassword(password, options);
  };

  // Verifies the password contains all requested options, otherwise recreates another password
  const verifyPassword = (password, options) => {
    if (options.length === 0) {
      setError('Please select options');
      return;
    }

    if (passwordContext.state.length === 0) {
      setError('Please provide a valid length');
      return;
    }

      let lowercaseFlag = true;
      let uppercaseFlag = true;
      let numberFlag = true;
      let symbolFlag = true;
      if (state.lowercase) {
        lowercaseFlag = findCommonElements(password, lower);
      }
      if (state.uppercase) {
        uppercaseFlag = findCommonElements(password, upper);
      }
      if (state.numbers) {
        numberFlag = findCommonElements(password, numeric);
      }
      if (state.symbols) {
        symbolFlag = findCommonElements(password, special);
      }
      if (
        lowercaseFlag === false ||
        uppercaseFlag === false ||
        numberFlag === false ||
        symbolFlag === false
      ) {
        selectCharacters(options);
      }
      setError('');
      password = password.join('');
      passwordContext.dispatch({ type: 'SET_PASSWORD', payload: password });
      passwordContext.dispatch({ type: 'SET_COPIED', payload: '' });
      
    
  };

  const findCommonElements = (password, optionArray) => {
    return optionArray.some((item) => password.includes(item));
  };

  return (
    <>
      <ErrorMessage error={error} />
      <button
        onClick={createOptions}
        className="mb-4 w-full bg-green hover:border-2 hover:border-solid hover:border-green hover:bg-transparent md:mb-6"
      >
        <div className="group flex items-center justify-center p-5">
          <p className="mr-2.5 text-2xs text-darkGray group-hover:text-green md:text-xs">
            GENERATE
          </p>
          <ArrowRightIcon />
        </div>
      </button>
    </>
  );
};

export default GeneratePassword;
