import React from "react";
import assets from "../../assets";
import style from "./main.module.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleMain = () => {
    navigate("/explore");
  };
  return (
    <div className={style.customSplash}>
      <button type="button" onClick={handleMain}>
        <img className={style.splashPos} src={assets.illustration} alt="" />
      </button>
    </div>
  );
};

export default Main;
