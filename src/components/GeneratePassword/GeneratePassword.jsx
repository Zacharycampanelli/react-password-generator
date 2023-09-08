import { useContext } from "react";
import { PasswordContext } from "../../App";

import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow-right.svg";
const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// const getCharacter = [
//   function upperCase() {
//     return upper(Math.floor(Math.random() * upper.length))
//   },
//   function lowerCase() {
//     return lower(Math.floor(Math.random() * lower.length))
//   },
//   function numbers() {
//     return numeric(Math.floor(Math.random() * numeric.length))
//   },
//   function symbols() {
//     return special(Math.floor(Math.random() * special.length))
//   },
// ]

const GeneratePassword = () => {
  const passwordContext = useContext(PasswordContext);

  let state = passwordContext.state;
  console.log(state);

  // Creates an array of possible choices for the final password
  const createOptions = () => {
    const options = [];
    console.log(state.lowercase);
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
    let lowercaseFlag = true;
    let uppercaseFlag = true; 
    let numberFlag = true;
    let symbolFlag = true;
    if (state.lowercase) {
       lowercaseFlag = findCommonElements(password, lower)
    }
    if (state.uppercase) {
       uppercaseFlag = findCommonElements(password, upper)
    }
    if (state.numbers) {
       numberFlag = findCommonElements(password, numeric)
    }
    if (state.symbols) {
       symbolFlag = findCommonElements(password, special)
    }
    if(lowercaseFlag === false || uppercaseFlag === false || numberFlag === false || symbolFlag === false) {
      selectCharacters(options)
    }
    return password;
  }

  const findCommonElements = (password, optionArray) => {
    return optionArray.some(item => password.includes(item))
  }

  return (
    <button onClick={createOptions} className="w-full bg-green">
      <div className="flex items-center justify-center p-3">
        <p className="mr-1.5 text-xs">GENERATE</p>
        <ArrowIcon className="" />
      </div>
    </button>
  );
};

export default GeneratePassword;
