import { useState, useContext } from "react";
import { ReactComponent as CheckedIcon } from "../../assets/images/icon-check.svg";
import Checkbox from "react-custom-checkbox";
import { PasswordContext } from "../../App";

const CheckboxItem = ({ description, option }) => {
  const passwordContext = useContext(PasswordContext);

  // Handles the checkbox color
  const [checked, setChecked] = useState(false);

  // Determines which action to dispatch based off of which checkbox was selected
  const handleDispatch = () => {
    setChecked(!checked);
    switch (option) {
      case "uppercase":
        passwordContext.dispatch({ type: "USE_UPPERCASE" });
        break;
      case "lowercase":
        passwordContext.dispatch({ type: "USE_LOWERCASE" });
        break;
      case "numbers":
        passwordContext.dispatch({ type: "USE_NUMBERS" });
        break;
      case "symbols":
        passwordContext.dispatch({ type: "USE_SYMBOLS" });
        break;
    }
  };

  return (
    <div className="my-4 flex">
      <Checkbox
        icon={<CheckedIcon />}
        onChange={handleDispatch}
        borderWidth="2"
        borderColor={checked ? "border-green" : "border-white"}
        borderRadius="0"
        className={checked ? "bg-green" : "bg-white"}
      />
      <p className="ml-6 text-white text-2xs">{description}</p>
    </div>
  );
};

export default CheckboxItem;
