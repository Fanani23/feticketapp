// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import NavbarAfter from "../../components/NavbarAfter";
import Navbar from "../../components/NavbarBefore";
import "./index.css";
import {
  FaPaypal,
  FaCcMastercard,
  FaCcVisa,
  FaCcStripe,
  FaLock,
  FaRegClock,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function Payment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const price = localStorage.getItem("price");
  const stock = localStorage.getItem("stock");
  const id_stock = localStorage.getItem("id_stock");

  const [credit_name, setCredit_name] = useState("");
  const [credit_number, setCredit_number] = useState("");
  const [expired_date, setExpired_date] = useState("");
  const [cvv, setCvv] = useState("");

  const handleData = async (e) => {
    e.preventDefault();
    let data = {
      id: id_stock,
      stock: stock,
    };
    try {
      await axios.put(
        `${process.env.REACT_APP_MY_API_KEY}/stock-ticket/edit-stock`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    let dataStatus = {
      status: 1,
    };
    try {
      await axios.put(
        `${process.env.REACT_APP_MY_API_KEY}/ticket/put-ticket/${id}`,
        dataStatus,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    let dataPayment = {
      credit_name: credit_name,
      credit_number: credit_number,
      expired_date: expired_date,
      cvv: cvv,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_MY_API_KEY}/payment-info/create`,
        dataPayment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    localStorage.removeItem("id_stock");
    localStorage.removeItem("price");
    localStorage.removeItem("stock");
    navigate("/mybooking");
  };
  return (
    <div>
      {token ? <NavbarAfter /> : <Navbar />}
      <div className="body py-5">
        <div className="container bg-white p-5">
          <div className="row">
            <div className="col-md-6 text-start">
              <h6>Payment Method</h6>
              <div
                className="row py-3"
                style={{ backgroundColor: "#f5f5f5", marginLeft: "5px" }}
              >
                <div className="col-md-3">
                  <h6>Paypal</h6>
                </div>
                <div className="col-md-1 offset-8">
                  <FaPaypal />
                </div>
              </div>
              <div
                className="row py-3"
                style={{ backgroundColor: "#f5f5f5", marginLeft: "5px" }}
              >
                <div className="col-md-3">
                  <h6>Credit Card</h6>
                </div>
                <div className="col-md-3 offset-6">
                  <div className="row">
                    <div className="col-1">
                      <FaCcMastercard />
                    </div>
                    <div className="col-1">
                      <FaCcVisa />
                    </div>
                    <div className="col-1">
                      <FaCcStripe />
                    </div>
                    <div className="col-1">
                      <FaCcVisa />
                    </div>
                    <div className="col-1">
                      <FaCcMastercard />
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="mt-4">Card Number</h6>
              <input
                type="text"
                className="form-control"
                placeholder="0000 0000 0000 0000"
                value={credit_number}
                onChange={(e) => setCredit_number(e.target.value)}
              />
              <div className="row mt-4">
                <div className="col-md-6">
                  <h6>Expiry Date</h6>
                  <input
                    type="date"
                    className="form-control"
                    value={expired_date}
                    onChange={(e) => setExpired_date(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <h6>CVC/CVV</h6>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="000"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
              <h6 className="mt-4">
                <FaLock className="me-2" />
                Your transaction is secured with ssl certificate
              </h6>
            </div>
            <div className="col-md-6 text-start">
              <h6>Summary</h6>
              <div className="row">
                <div className="col-md-6">
                  <h6>Pro(Billed Monthly)</h6>
                  <p style={{ color: "#2395FF", fontSize: "10px" }}>
                    Save 20% with annual billing
                  </p>
                </div>
                <div className="col-md-1 offset-4">
                  <span>$ {price}</span>
                  <h6
                    style={{
                      fontSize: "10px",
                      marginLeft: "40px",
                      marginTop: "-20px",
                    }}
                  >
                    /Month
                  </h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h6>Bank Choice</h6>
                  <h6 style={{ fontSize: "13px" }}>
                    Name of bank
                    <FaRegClock className="ms-2" />
                  </h6>
                </div>
                <div className="col-md-1 offset-4">
                  <label htmlFor="credit_name">Bank</label>
                  <select
                    name="credit_name"
                    id="credit_name"
                    value={credit_name}
                    onChange={(e) => setCredit_name(e.target.value)}
                  >
                    <option value="BRI">BRI</option>
                    <option value="BNI">BNI</option>
                    <option value="BCA">BCA</option>
                    <option value="Mandiri">Mandiri</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#2395FF", width: "600px" }}
                    onClick={handleData}
                  >
                    Try it free for 30 days
                  </button>
                  <h6
                    className="text-center"
                    style={{ fontSize: "13px", color: "#2395FF" }}
                  >
                    Have promo code?
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
