import React, { useState } from "react";
import assets from "../../../assets";
import Illustration from "../../../components/Illustration";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginCustomer } from "../../../redux/Actions/Login/Customer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToForgot = () => {
    navigate("/forgot");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginCustomer(data, navigate));
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
        <form onSubmit={handleLogin} className={style.rightBody}>
          <h4>Login</h4>
          <div className="mt-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className={style.rightFooter}>
          <p type="button" onClick={handleToForgot}>
            Did you forgot your password?
          </p>
          <button type="button" onClick={handleToForgot}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
