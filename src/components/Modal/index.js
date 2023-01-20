import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Assets from "../../images";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function ModalFind() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        variant="none"
        onClick={handleShow}
        style={{ marginLeft: "90px" }}
      >
        <h6>Find Ticket</h6>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h6>Hey,</h6>
            <h5>Where you want to go?</h5>
            <h6 style={{ color: "#2395FF" }}>Recently Searched</h6>
            <img
              src={Assets.btnback2}
              alt=""
              className="btn"
              style={{ marginLeft: "420px", marginTop: "-75px" }}
            />

            <div className="row align-items-center bg-white shadow rounded-3 pb-4 pt-4">
              <div className="col-md-4 text-start">
                <h6 className="text-secondary">From</h6>
                <h5>Medan</h5>
                <h6>Indonesia</h6>
              </div>
              <div className="col-md-1" style={{ marginLeft: "60px" }}>
                <img src={Assets.vector} alt="" style={{ height: "20px" }} />
              </div>
              <div
                className="col-md-4 offset-1 text-end"
                style={{ marginLeft: "60px" }}
              >
                <h6 className="text-secondary">To</h6>
                <h5>Tokyo</h5>
                <h6>Japan</h6>
              </div>
            </div>
            <button
              className="btn mt-5"
              style={{
                backgroundColor: "#2395FF",
                color: "white",
                marginLeft: "80px",
              }}
            >
              <img src={Assets.oneway} alt="" className="me-2" />
              One Way
            </button>
            <button
              className="btn mt-5"
              style={{
                backgroundColor: "#F5F5F5",
                color: "black",
                marginLeft: "50px",
              }}
            >
              <img src={Assets.roundtrip} alt="" className="me-2" />
              Round trip
            </button>
            <h6 className="mt-4">Departure</h6>
            <input
              type="date"
              placeholder="Monday, 20 July 2020"
              className="form-control mb-4"
            />
            <h6>How many person?</h6>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="2 Child"
                  className="form-control mb-4"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="4 Adult"
                  className="form-control mb-4"
                />
              </div>
            </div>
            <h6 className="mb-4">Which class do you want?</h6>
            <Form className="fs-6 ms-5">
              {["radio"].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Check
                    inline
                    label="Economy"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Business"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="First Class"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form>
            <Link to="/flight">
              <button
                className="btn mt-4"
                style={{
                  backgroundColor: "#2395FF",
                  color: "white",
                  height: "70px",
                  width: "460px",
                }}
              >
                <h6 className="text-start" style={{ marginTop: "15px" }}>
                  SEARCH FLIGHT
                </h6>
                <img
                  src={Assets.next}
                  alt=""
                  style={{ marginLeft: "330px", marginTop: "-60px" }}
                />
              </button>
            </Link>
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default ModalFind;
