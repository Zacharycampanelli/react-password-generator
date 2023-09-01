import * as React from "react"
const SvgComponent = (props) => {
    return (
  <svg xmlns="http://www.w3.org/2000/svg" width={140} height={120} viewBox=""{...props}>
    <path
      fill="none"
      stroke="#fff"
      width={100}
      strokeWidth={3}
      d="M1 5.607 4.393 9l8-8"
    />
  </svg>)
}
export default SvgComponent
