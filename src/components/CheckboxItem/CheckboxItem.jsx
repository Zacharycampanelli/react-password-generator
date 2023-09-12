import { useState, useContext } from 'react';
import { ReactComponent as CheckedIcon } from '../../assets/images/icon-check.svg';
import Checkbox from 'react-custom-checkbox';
import { PasswordContext } from '../../App';

const CheckboxItem = ({ description, option }) => {
  const passwordContext = useContext(PasswordContext);

  // Handles the checkbox color
  const [checked, setChecked] = useState(false);

  // Determines which action to dispatch based off of which checkbox was selected
  const handleDispatch = () => {
    setChecked(!checked);
    switch (option) {
      case 'uppercase':
        passwordContext.dispatch({ type: 'USE_UPPERCASE' });
        break;
      case 'lowercase':
        passwordContext.dispatch({ type: 'USE_LOWERCASE' });
        break;
      case 'numbers':
        passwordContext.dispatch({ type: 'USE_NUMBERS' });
        break;
      case 'symbols':
        passwordContext.dispatch({ type: 'USE_SYMBOLS' });
        break;
    }
  };

  return (
    <div className="my-4  flex">
      <Checkbox
        icon={<CheckedIcon />}
        onChange={handleDispatch}
        borderWidth="2"
        borderColor={checked ? '' : ''}
        borderRadius="0"
        className={
          checked
            ? 'border-2 border-green bg-green'
            : 'border-2 border-white bg-transparent'
        }
      />
      <p className="ml-4 text-2xs text-white md:text-xs">{description}</p>
    </div>
  );
};

export default CheckboxItem;
