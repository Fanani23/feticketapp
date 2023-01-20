import React from "react";
import assets from "../../assets";
import style from "./illustration.module.css";

const Illustration = () => {
  return (
    <div className="">
      <img className={style.splashPos} src={assets.illustration} alt="" />
    </div>
  );
};

export default Illustration;
