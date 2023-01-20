/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavbarBefore";
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import "./index.css";
import Assets from "../../images";
import axios from "axios";
import CardProfile from "../../components/CardProfile";
import { useNavigate } from "react-router-dom";

function MyBooking() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MY_API_KEY}/ticket/get-ticket-join`, user)
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
  return (
    <div>
      {token ? <NavbarAfter /> : <Navbar />}
      <div className="body2 py-5">
        <div className="container p-5">
          <div className="row">
            <div
              className="col-md-3 bg-white rounded-3 shadow"
              style={{ height: "600px" }}
            >
              <CardProfile />
            </div>
            <div className="col-md-8 offset-1">
              <div className="container bg-white rounded-3">
                <h6 className="text-start pt-3" style={{ color: "#2395FF" }}>
                  MY BOOKING
                </h6>
                <div className="row align-items-center">
                  <div className="col-3 mb-2">
                    <h5 className="text-start">My Booking</h5>
                  </div>
                  <div className="col-3 offset-5">
                    <h6 className="text-end" style={{ color: "#2395FF" }}>
                      Order History
                    </h6>
                  </div>
                </div>
              </div>
              {data ? (
                data.map((item) => (
                  <div className="container bg-white rounded-3 my-4 pt-2 pb-4">
                    <h6 className="text-start pt-3 pb-1">{item.date}</h6>
                    <div className="row align-items-center">
                      <div className="col-1 mb-3">
                        <h5 className="text-start">{item.origin}</h5>
                      </div>
                      <div className="col-1 mb-3">
                        <img src={Assets.flight} alt="" />
                      </div>
                      <div className="col-1 mb-3">
                        <h5 className="text-start">{item.destination}</h5>
                      </div>
                    </div>
                    <h6 className="text-secondary text-start">
                      {item.name},{item.code}
                    </h6>
                    <hr />
                    <div className="row align-items-center">
                      <div className="col-1 my-2">
                        <h6 className="text-start">Status</h6>
                      </div>
                      <div className="col-3 my-2 offset-1">
                        {item.detail === "Waiting for payment" ? (
                          <button
                            className="btn"
                            key={item.stock_id}
                            onClick={() => navigate(`/payment/${item.id}`)}
                            style={{
                              backgroundColor: "#FF7F23",
                              color: "white",
                            }}
                          >
                            {item.detail}
                          </button>
                        ) : (
                          <button
                            className="btn"
                            key={item.stock_id}
                            onClick={() =>
                              navigate(`/bookingpass/${item.stock_id}`)
                            }
                            style={{
                              backgroundColor: "#4FCF4D",
                              color: "white",
                            }}
                          >
                            {item.detail}
                          </button>
                        )}
                      </div>
                      <div className="col-3 offset-3">
                        <h6 className="text-end" style={{ color: "#2395FF" }}>
                          View Details <img src={Assets.btnbot} alt="" />
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyBooking;
