import { useState } from 'react'

import Header from './components/Header/Header'
import PasswordOutput from './components/PasswordOutput/PasswordOutput'
function App() {
const [password, setPassword] = useState('password')
  return (
    <div className='bg-black'>
      <div className='container flex flex-col items-center'>

     <Header/>
     <PasswordOutput password={password} />
     <button className="btn">Button</button>
      </div>
    </div>
  )
}

export default App
