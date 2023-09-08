import { useContext } from 'react'
import { PasswordContext } from "../../App";


import {ReactComponent as ArrowIcon} from "../../assets/images/icon-arrow-right.svg";
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


const GeneratePassword = () => {
  const passwordContext = useContext(PasswordContext);

let state = passwordContext.state;
console.log(state)
  const generatePassword = () => {
    if (state.lowercase){

    }
    // state.uppercase state.numbers state.symbols
  }

  return (
    <button onClick={generatePassword} className='bg-green w-full'>
      <div className='flex justify-center items-center p-3'>
        <p className='mr-1.5 text-xs'>
            GENERATE 
            </p>
      <ArrowIcon className=''/>
        </div>
    </button>
  )
}

export default GeneratePassword
