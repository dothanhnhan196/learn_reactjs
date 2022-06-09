import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';

const InputOTP = (props) => {

    const [otp, setOtp] = useState("");

    const handleChange = (otp) => {
        setOtp(otp);
        props.setUserOTPParent(otp);
    };

    const handleSubmitOTP = () => {
        props.handleSubmitOTP();
    }

    return (
        <div className='input-otp-container'>
            <h2>Enter verification code</h2>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />
            <div className='timer'>
                <CountDown setIsDisableBtn={props.setIsDisableBtn} />
            </div>
            <div className='action'>
                <button className='clear'>Clear</button>
                <button className='confrim'
                    disabled={props.isDisableBtn}
                    onClick={() => handleSubmitOTP()}
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default InputOTP;