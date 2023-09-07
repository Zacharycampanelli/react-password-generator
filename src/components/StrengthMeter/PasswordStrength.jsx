import { useContext, useState } from "react";
import "./passwordStrength.css";
import { PasswordContext } from "../../App";

function PasswordStrength(props) {
  const passwordContext = useContext(PasswordContext);
  let { length, ...choices } = passwordContext.state;
  const [strength, setStrength] = useState(0)
 
 
  const strengthChecker = () => {
    

    let strengthText = [
      "",
      "unacceptable",
      "weak",
      "average",
      "good",
      "strong",
    ];

    for (const choice in choices) {
      if (choices[choice] === true) {
        setStrength(prev => prev += 1);
      }
    }
    if (length >= 8) {
        setStrength(prev => prev += 1);
    }
console.log(strength)
    return { text: strengthText[strength], value: strength };
  };


  const pickElement = (i) => {
    if (i < 3)
      return (
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "205%", background: 'red' }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <p>This is line {i + 1}</p>
        </div>
      )
      else return (<div
        className="progress-bar"
        role="progressbar"
        style={{ width: "255%" }}
        aria-valuenow="15"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <p>This is line {i + 1}</p>
      </div>);
  };
  let htmlElements;

//   useEffect(() => {
     htmlElements = Array.from({ length: 5 }, (item, index) => (
      <div key={index}>{pickElement(index)}</div>
    ));
    // console.log(typeof htmlElements)
// }, [passwordContext])

  return (
    // <div>
       <div className="progress">
  {/* <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div className="progress-bar bg-info" role="progressbar" style={{width: "25%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>  */}
      {strengthChecker().text}
      {/* </div> */}
      {/* <progress
            className={`pwd-checker-bar strength-${strengthChecker().text}`}
            value={strengthChecker().value}
            max="5"
          /> 
          {strengthChecker().text} */}
      {strengthChecker().value}
      {htmlElements}
    </div>
  );
}
export default PasswordStrength;
