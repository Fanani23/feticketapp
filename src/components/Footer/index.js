import React from "react";
import Assets from "../../images";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-1">
            <img src={Assets.logo} alt="" />
          </div>
          <div className="col-md-1">
            <h4 style={{ marginLeft: "-60px" }}>Ankasa</h4>
          </div>
          <div className="col-md-1 offset-2">
            <h6>Features</h6>
          </div>
          <div className="col-md-3 offset-1">
            <h6>Download Angkasa app</h6>
          </div>
          <div className="col-md-1 offset-1">
            <h6>Follow Us</h6>
          </div>
        </div>

        <div className="row text-secondary">
          <div className="col-md-3">
            <h6 className="text-start ms-3 mt-4">
              Find your Flight and explore the world with us. We will take care
              of the rest
            </h6>
          </div>
          <div className="col-md-3 text-start">
            <h6 style={{ marginLeft: "115px" }} className="mt-4">
              Find Ticket
            </h6>
            <h6 style={{ marginLeft: "115px" }}>My Booking</h6>
            <h6 style={{ marginLeft: "115px" }}>Chat</h6>
            <h6 style={{ marginLeft: "115px" }}>Notification</h6>
          </div>
          <div className="col-md-1 offset-1">
            <img
              src={Assets.apple}
              alt=""
              style={{ marginLeft: "-115px  " }}
              className="mb-3 mt-4"
            />
            <img src={Assets.gplay} alt="" style={{ marginLeft: "-115px  " }} />
          </div>
          <div className="col-md-3 offset-1">
            <div className="row mt-3" style={{ marginLeft: "85px" }}>
              <div className="col-md-1">
                <img src={Assets.fb} alt="" />
              </div>
              <div className="col-md-1">
                <img src={Assets.twit} alt="" />
              </div>
              <div className="col-md-1">
                <FaInstagram
                  style={{ width: "20px", height: "30px", marginLeft: "10px" }}
                />
              </div>
              <div className="col-md-1">
                <AiOutlineYoutube
                  style={{ width: "30px", height: "30px", marginLeft: "15px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 text-secondary">
          <div className="col-md-6">
            <h6 style={{ marginLeft: "0px" }}>
              © Ankasa. All Rights Reserved.
            </h6>
          </div>
          <div className="col-md-6">
            <h6 style={{ marginLeft: "420px" }}>
              <FiMapPin className="me-2" />
              Jakarta Indonesia
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
