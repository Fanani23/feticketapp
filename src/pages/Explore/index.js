import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarBefore";
import "./index.css";
import SwiperCarousel from "../../components/SwiperCarousel";
import CardDestinations from "../../components/CardDestinations";
import Assets from "../../images";
import NavbarAfter from "../../components/NavbarAfter";

function Explore() {
  const token = localStorage.getItem("token");
  return (
    <div>
      {token ? <NavbarAfter /> : <Navbar />}
      <div className="container" style={{ marginTop: "130px" }}>
        <div className="row">
          <div className="col-md-6" style={{ marginLeft: "80px" }}>
            <h1>Find your</h1>
            <h1
              style={{
                color: "#2395FF",
                marginLeft: "180px",
                marginTop: "-55px",
              }}
            >
              Flight
            </h1>
            <h6 className="text-secondary" style={{ marginLeft: "0px" }}>
              and explore the world with us
            </h6>
          </div>
        </div>
        <img
          src={Assets.img2}
          alt=""
          style={{ marginLeft: "978px", marginTop: "-180px" }}
        />
        <img
          src={Assets.img1}
          alt=""
          style={{ marginLeft: "-120px", marginTop: "-140px" }}
        />
      </div>
      <CardDestinations />
      <SwiperCarousel />
      <Footer />
    </div>
  );
}

export default Explore;
