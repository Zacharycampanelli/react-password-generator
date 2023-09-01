import { useState } from "react"
import CheckboxItem from "./CheckboxItem"


const Checklist = () => {
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  
  return (
    <div>
      <CheckboxItem description="Include Uppercase Letters" option={uppercase} setOption={setUppercase} />
      <CheckboxItem description="Include Lowercase Letters" option={lowercase} setOption={setLowercase} />
      <CheckboxItem description="Include Numbers" option={numbers} setOption={setNumbers} />
      <CheckboxItem description="Include Symbols" option={symbols} setOption={setSymbols} />
    </div>
  )
}

export default Checklist
