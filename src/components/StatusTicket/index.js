import React, { useState, useEffect } from "react";
import axios from "axios";

function StatusTicket() {
  const [dataTicket, setDataTicket] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:3006/ticket/get-ticket-join", user)
      .then((res) => {
        console.log("Get status user success");
        console.log(res.data);
        res.data && setDataTicket(res.data.data);
      })
      .catch((err) => {
        console.log("Get status user fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: "#FF7F23", color: "white" }}
      >
        {dataTicket ? dataTicket[0].detail : "data not found"}
      </button>
    </div>
  );
}

export default StatusTicket;
