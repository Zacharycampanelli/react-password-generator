import React from 'react'
import {ReactComponent as ArrowIcon} from "../../assets/images/icon-arrow-right.svg";
 
const GeneratePassword = () => {
  return (
    <button className='bg-green w-full'>
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
