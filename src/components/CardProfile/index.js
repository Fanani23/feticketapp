/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Assets from "../../images";
import ModalPhoto from "../ModalPhoto";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CardProfile() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MY_API_KEY}/auth/user`, user)
      .then((res) => {
        console.log("Get detail user success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get detail user fail");
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await localStorage.clear();
    Swal.fire("Logout", "Logout success", "success");
    navigate("/login");
  };
  //   const dispatch = useDispatch();
  //   const { dataProfileResult } = useSelector((state) => state.profile);
  //   const payload = dataProfileResult.data;

  //   useEffect(() => {
  //     dispatch(getDataProfile());
  //   }, [dispatch]);
  return (
    <div>
      <div>
        <img
          src={data ? data[0].photo : "data not found"}
          alt=""
          style={{
            borderRadius: "50%",
            border: "3px solid #2395FF",
            marginTop: "30px",
            height: "120px",
            width: "120px",
            marginLeft: "85px",
          }}
        />
      </div>
      <ModalPhoto />
      <h6 className="mt-4 text-center">
        {data ? data[0].fullname : "data not found"}
      </h6>
      <h6 style={{ fontSize: "10px" }} className="text-center">
        {" "}
        <img src={Assets.map} alt="" />
        {data ? data[0].city : "data not found"},
        {data ? data[0].address : "data not found"}
      </h6>
      <div className="row mt-4">
        <div className="col-md-1">
          <h6>Cards</h6>
        </div>
        <div className="col-md-1 offset-8">
          <h6 style={{ color: "#2395FF" }}>+Add</h6>
        </div>
      </div>
      <button
        className="btn mt-3"
        style={{ backgroundColor: "#2395FF", width: "280px" }}
      >
        <h6 className="text-white text-start">4441 1235 5512 5551</h6>
        <div className="row">
          <div className="col-3">
            <h6 style={{ fontSize: "10px", color: "#AEFAFF" }}>X Card</h6>
          </div>
          <div className="col-3 offset-6">
            <h6 style={{ fontSize: "10px", color: "#AEFAFF" }}>$ 1,440.2</h6>
          </div>
        </div>
      </button>
      <div className="row mt-3">
        <div className="col-1">
          <img src={Assets.user} alt="" />
        </div>
        <div className="col-1 offset-2">
          <h6 style={{ color: "#2395FF" }}>Profile</h6>
        </div>
        <div className="col-1 offset-6">
          <img src={Assets.btnback2} alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-1">
          <img src={Assets.star} alt="" />
        </div>
        <div className="col-4 offset-2">
          <h6>My Review</h6>
        </div>
        <div className="col-1 offset-3">
          <img src={Assets.btnback3} alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-1">
          <img src={Assets.setting} alt="" />
        </div>
        <div className="col-1 offset-2">
          <h6>Settings</h6>
        </div>
        <div className="col-1 offset-6">
          <img src={Assets.btnback3} alt="" />
        </div>
      </div>
      <div className="row mt-3" onClick={handleLogout}>
        <div className="col-1">
          <img src={Assets.logout} alt="" />
        </div>
        <div className="col-1 offset-2">
          <h6 style={{ color: "red" }}>Logout</h6>
        </div>
        <div className="col-1 offset-6">
          <img src={Assets.btnback4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
