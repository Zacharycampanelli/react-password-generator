import PasswordStrengthBar from 'react-password-strength-bar';

const passwordStrengthCrit = [
    {
        level: 1,
        value: 'TOO WEAK',
        color: '#F64A4A'
    }
]


const StrengthMeter = () => {
    const password = 'asdffdfsddstdrtmrt';
  return (
    <div className="flex bg-black text-2xs text-gray justify-between p-4">
      <p>STRENGTH</p>

      <div className="flex">
        <p className="text-xs text-white">MEDIUM</p>
        <div className="flex justify-between">

        <div className="border-solid border-2 border-white w-2.5 h-7 mx-1"></div>
        <div className="border-solid border-2 border-white w-2.5 h-7 mx-1"></div>
        <div className="border-solid border-2 border-white w-2.5 h-7 mx-1"></div>
        <div className="border-solid border-2 border-white w-2.5 h-7 mx-1"></div>
        </div>
      </div>
<PasswordStrengthBar password={password} barColoors={['red']} />
    </div>
  )
}

export default StrengthMeter
