import { useState } from "react";

const GennerateOTP = (props) => {

    const [orgOTP, setorgOTP] = useState("");

    const handleClickBtn = () => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        setorgOTP(otp);
        props.setOrgOPTParent(otp);
    }

    return (
        <div className="generate-otp-container">
            <button onClick={() => handleClickBtn()}>Generate OTP</button>
            <div className="title">Your OTP is: {orgOTP}</div>
        </div>
    )
}

export default GennerateOTP;