import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function ModalPhoto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [photo, setPhoto] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    console.log(formData, "data dari handle data update");
    axios
      .put(
        `https://gentle-tights-jay.cyclic.app/auth/edit-photo`,
        formData,
        user,
        {
          "content-type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log("Update photo succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update photo profile success", "success");
      })
      .catch((err) => {
        console.log("Update photo profile failed");
        console.log(err);
        Swal.fire("Warning", "Update photo profile failed", "error");
      });
  };
  return (
    <div>
      <button
        className="btn mt-4"
        onClick={handleShow}
        style={{ borderColor: "#2395FF", color: "#2395FF", marginLeft: "85px" }}
      >
        Select Photo
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Photo Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <input type="file" name="photo" onChange={handlePhotoChange} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleData(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPhoto;
