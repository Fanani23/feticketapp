import React from "react";
import Assets from "../../images";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function CardDestinations() {
  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-2">
            <h6 style={{ color: "#2395FF" }}>TRENDING</h6>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-3">
            <h5 style={{ marginLeft: "0px" }}>Trending destinations</h5>
          </div>
          <div className="col-md-3 offset-5">
            <h6 style={{ color: "#2395FF", marginLeft: "240px" }}>View all</h6>
          </div>
        </div>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={5}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti6}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti7}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti6}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti7}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti6}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti6}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti7}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti6}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti7}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card text-white rounded-5"
              style={{ width: "200px", height: "260px" }}
            >
              <img
                className="card-img rounded-4"
                src={Assets.desti6}
                alt=""
                style={{ width: "200px", height: "260px" }}
              />
              <div className="card-img-overlay">
                <h6
                  className="card-text text-start"
                  style={{ fontSize: "13px" }}
                >
                  Tokyo,
                </h6>
                <h5 className="card-text text-start">Japan</h5>
                <button
                  className="btn-new rounded-5"
                  style={{
                    color: "white",
                    width: "88px",
                    fontSize: "13px",
                    border: "none",
                    marginLeft: "0px",
                  }}
                >
                  15 Airlines
                </button>
                <h6 className="text-start" style={{ marginTop: "110px" }}>
                  From $100
                </h6>
                <div
                  className="btn-new2"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    marginLeft: "140px",
                    marginTop: "-30px",
                  }}
                >
                  <img
                    src={Assets.btnback}
                    alt=""
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CardDestinations;
