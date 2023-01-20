/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import assets from "../../../assets";
import Illustration from "../../../components/Illustration";
import style from "./verification.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verificationAccount } from "../../../redux/Actions/Verification/Customer";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVerification = (e) => {
    e.preventDefault();
    let data = {
      email,
      otp,
    };
    dispatch(verificationAccount(data, navigate));
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChange2 = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className={style.customBasis}>
      <div className={style.basisLeft}>
        <Illustration className={style.splashPos} />
      </div>
      <div className={style.basisRight}>
        <div className={style.rightHeader}>
          <img src={assets.flight} alt="" />
          <p>Ankasa</p>
        </div>
        <form onSubmit={handleVerification} className={style.rightBody}>
          <h4>Verification OTP</h4>
          <div className="mt-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="otp"
              id="otp"
              placeholder="Otp"
              onChange={handleChange2}
            />
          </div>
          <button type="submit">Verification</button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
