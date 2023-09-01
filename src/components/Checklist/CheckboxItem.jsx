import { useState } from "react";
import { ReactComponent as CheckedIcon } from "../../assets/images/icon-check.svg";
import Checkbox from "react-custom-checkbox";
const CheckboxItem = ({description, option, setOption}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="my-4 flex">
      <Checkbox
        icon={<CheckedIcon />}
        onChange={() => setOption(!option)}
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
