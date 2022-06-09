import { useState } from "react";
import GennerateOTP from "./GennerateOTP";
import InputOTP from "./InputOTP";
import './OTP.scss';

const OTP = () => {

    const [orgOPTParent, setOrgOPTParent] = useState("");
    const [userOTPParent, setUserOTPParent] = useState("");
    const [isDisableBtn, setIsDisableBtn] = useState(false);

    const handleSubmitOTP = () => {
        // +variable: convert sang kiểu số nguyên
        if (+orgOPTParent === +userOTPParent) {
            alert("Correct OTP");
        } else {
            alert("Wrong OTP!!!");
        }
    }
    return (
        <div className="otp-parent-container">
            <GennerateOTP setOrgOPTParent={setOrgOPTParent} />
            <InputOTP
                setUserOTPParent={setUserOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}
            />
        </div>
    )
}

export default OTP;