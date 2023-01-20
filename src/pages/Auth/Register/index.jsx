import React, { useState } from "react";
import assets from "../../../assets";
import Illustration from "../../../components/Illustration";
import style from "./register.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerCustomer } from "../../../redux/Actions/Register/Customer";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispacth = useDispatch();
  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(password);
    let data = {
      fullname,
      email,
      password,
    };
    dispacth(registerCustomer(data, navigate));
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
        <form onSubmit={handleRegister} className={style.rightBody}>
          <h4>Register</h4>
          <div className="mt-3">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
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
          <button type="submit">Sign Up</button>
        </form>
        <div className={style.rightFooter}>
          <p type="button" onClick={handleToLogin}>
            Already have an account?
          </p>
          <button type="button" onClick={handleToLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
