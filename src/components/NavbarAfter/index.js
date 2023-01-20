import React from "react";
import { Link } from "react-router-dom";
import Assets from "../../images";
import ModalFind from "../Modal";

function NavbarAfter() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-1">
            <img src={Assets.logo} alt="" />
          </div>
          <div className="col-md-1">
            <h4 style={{ marginLeft: "-60px" }}>Ankasa</h4>
          </div>
          <div className="col-md-2 ">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Where you want to go?"
              style={{ backgroundColor: "#f5f5f5", marginLeft: "40px" }}
            />
          </div>
          <div className="col-md-2 ms-4">
            <ModalFind />
          </div>
          <div className="col-md-2">
            <Link
              to="/mybooking"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>My Booking</h6>
            </Link>
          </div>
          <div className="col-md-1">
            <button className="btn">
              <img src={Assets.message} alt="" />
            </button>
          </div>
          <div className="col-md-1">
            <button className="btn">
              <img src={Assets.notif} alt="" />
            </button>
          </div>
          <div className="col-md-1">
            <Link to="/profile">
              <button className="btn">
                <img
                  src={Assets.prof}
                  alt=""
                  style={{ borderRadius: "50%", border: "3px solid #2395FF" }}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarAfter;
