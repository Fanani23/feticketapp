import React from "react";
import assets from "../../../assets";
import Illustration from "../../../components/Illustration";
import style from "./forgot.module.css";
// import { useNavigate } from "react-router-dom";

const Forgot = () => {
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
        <form className={style.rightBody}>
          <h4>Forgot Password</h4>
          <div className="mt-3">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <button>Send</button>
        </form>
        <div className={style.rightFooter}>
          <p>You'll get message soon on your email</p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
