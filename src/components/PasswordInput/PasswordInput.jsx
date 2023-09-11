import Checklist from "../Checklist/Checklist";
import GeneratePassword from "../GeneratePassword/GeneratePassword";
import Slider from "../Slider/Slider";
import StrengthMeter from "../StrengthMeter/StrengthMeter";

const PasswordInput = () => {
  return (
    <div className="mx-4 mb-20  mt-4 w-full max-w-xs bg-darkGray p-4 text-left">
      <Slider />
      <Checklist />
      <StrengthMeter />
      <GeneratePassword />
    </div>
  );
};

export default PasswordInput;
