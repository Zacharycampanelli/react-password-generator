import { useState,useContext } from "react";
import { ReactComponent as CheckedIcon } from "../../assets/images/icon-check.svg";
import Checkbox from "react-custom-checkbox";
import { PasswordContext } from "../../App";


const CheckboxItem = ({description, option}) => {
  const passwordContext = useContext(PasswordContext);

  
  const [checked, setChecked] = useState(false);

  const handleDispatch = () => {
    switch(option) {
      case 'uppercase':
        passwordContext.dispatch({type: 'USE_UPPERCASE'});
        break;
      case 'lowercase':
        passwordContext.dispatch({type: 'USE_LOWERCASE'});
        break;
      case 'numbers':
        passwordContext.dispatch({type: 'USE_NUMBERS'});
        break;
      case 'symbols':
        passwordContext.dispatch({type: 'USE_SYMBOLS'});
        break;

    }
  }


  return (
    <div className="my-4 flex">
      <Checkbox
        icon={<CheckedIcon />}
        onChange={handleDispatch}
        borderWidth="2"
        borderColor={option ? "border-green" : "border-white"}
        borderRadius="0"
        className={option ? "bg-green" : "bg-white"}
      />
      <p className="text-white ml-6">{description}</p>
    </div>
  );
};

export default CheckboxItem;
