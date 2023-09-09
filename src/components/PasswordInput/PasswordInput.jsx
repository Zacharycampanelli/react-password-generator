import Checklist from "../Checklist/Checklist";
import GeneratePassword from "../GeneratePassword/GeneratePassword";
import Slider from "../Slider/Slider";
import PasswordStrength2 from "../StrengthMeter/PasswordStrength2";
import StrengthMeter from "../StrengthMeter/StrengthMeter";

const PasswordInput = () => {
  return (
    <div className="bg-darkGray mx-4  mt-4 w-full max-w-xs p-4 text-left mb-20">
       <Slider />
       <Checklist />
       {/* <StrengthMeter /> */}
       <PasswordStrength2  />
       <GeneratePassword/>
    </div>
  )
}

export default PasswordInput
