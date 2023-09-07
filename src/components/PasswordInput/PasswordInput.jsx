import Checklist from "../Checklist/Checklist";
import Slider from "../Slider/Slider";
import PasswordStrength from "../StrengthMeter/PasswordStrength";
import StrengthMeter from "../StrengthMeter/StrengthMeter";

const PasswordInput = () => {
  return (
    <div className="bg-darkGray mx-4 px-8 mt-4 w-full max-w-xs p-4 text-left">
       <Slider />
       <Checklist />
       {/* <StrengthMeter /> */}
       <PasswordStrength password={'password'} />
    </div>
  )
}

export default PasswordInput
