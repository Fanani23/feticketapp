/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "./profile.module.css";
import phot from "../../assets/iconuser.png";
import location from "../../assets/location.png";
import card from "../../assets/card.png";
import icon from "../../assets/user.png";
import star from "../../assets/star.png";
import setting from "../../assets/setting.png";
import log from "../../assets/logout.png";
import rowblue from "../../assets/blue.png";
import rowgrey from "../../assets/grey.png";
import rowred from "../../assets/red.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarBefore";
import NavbarAfter from "../../components/NavbarAfter";

function Profile() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // console.log("ini tokennyaaaa=", token);

  // get Data
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MY_API_KEY}/auth/user`, user)
      .then((res) => {
        console.log("get data succes");
        console.log(res.data);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);

  // Update Data Profile
  const [photo, setPhoto] = useState(null);
  const [updateData, setUpdateData] = useState({
    email: data.email,
    fullname: data.fullname,
    phone: data.phone,
    city: data.city,
    address: data.address,
    postcode: data.postcode,
  });

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const users = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  };

  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", updateData.fullname);
    formData.append("email", updateData.email);
    formData.append("phone", updateData.phone);
    formData.append("city", updateData.city);
    formData.append("address", updateData.address);
    formData.append("postcode", updateData.postcode);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .put(`${process.env.REACT_APP_MY_API_KEY}/auth/update`, formData, users, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log("Update profile succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update profile success", "success");
      })
      .catch((err) => {
        console.log("Update data profile failed");
        console.log(err);
        Swal.fire("Warning", "Update profile failed", "error");
      });
  };

  //Logout
  const handleLogout = async () => {
    await localStorage.clear();
    Swal.fire("Logout", "Logout success", "success");
    navigate("/login");
  };

  //Update Photo Only
  const handleEditPhoto = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    console.log(formData, "data dari handle photo update");
    axios
      .put(
        `${process.env.REACT_APP_MY_API_KEY}/auth/edit-photo`,
        formData,
        users,
        {
          "content-type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log("update photo succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update photo profile success", "success");
      })
      .catch((err) => {
        console.log("update photo fail");
        console.log(err);
        Swal.fire("Warning", "Update photo profile failed", "error");
      });
  };

  return (
    <div>
      {token ? <NavbarAfter /> : <Navbar />}
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.side1}>
            {data.photo === null ? (
              <img src={phot} alt="" className={styles.img} />
            ) : (
              <img src={data.photo} alt="" className={styles.img} />
            )}
            <div className={styles.file}>
              <label htmlFor="files" className="btn">
                Select Photo
              </label>
              <input
                type="file"
                id="files"
                name="photo"
                onChange={handlePhotoChange}
              />
            </div>
            <button
              type="submit"
              onClick={(e) => handleEditPhoto(e)}
              className={styles.btnn}
            >
              {" "}
              Save{" "}
            </button>

            <div className={styles.name}>
              <h3>{data.fullname}</h3>
              <img src={location} alt="" />
              <span>
                {data.city}, {data.address}
              </span>
            </div>
            <div className={styles.card}>
              <span style={{ color: "black" }}> Card </span>
              <span> + Add </span>
            </div>
            <img src={card} alt="" className={styles.imgcard} />
            <div className={styles.span}>
              <img src={icon} alt="" />
              <span className={styles.prof}> Profile </span>
              <img
                src={rowblue}
                alt=""
                className={styles.panah}
                style={{ marginLeft: "1-px" }}
              />
            </div>
            <div className={styles.span}>
              <img src={star} alt="" />
              <span> My Review </span>
              <img
                src={rowgrey}
                alt=""
                className={styles.panah}
                style={{ marginLeft: "34px" }}
              />
            </div>
            <div className={styles.span}>
              <img src={setting} alt="" />
              <span> Setting </span>
              <img
                src={rowgrey}
                alt=""
                className={styles.panah}
                style={{ marginLeft: "58px" }}
              />
            </div>
            <div onClick={handleLogout} className={styles.span}>
              <img src={log} alt="" />
              <span className={styles.log}> Logout </span>
              <img
                src={rowred}
                alt=""
                className={styles.panah}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
          <div className={styles.side2}>
            <h5> Profile </h5>
            <h3> Profile </h3>
            <div className={styles.input}>
              <div className={styles.contact}>
                <h6> Contact </h6>
                <p> Email </p>
                <input
                  type="email"
                  name="email"
                  placeholder={data.email}
                  onChange={(e) => handleChange(e)}
                  value={updateData.email}
                />
                <p> Phone Number </p>
                <input
                  type="number"
                  name="phone"
                  placeholder={data.phone}
                  onChange={(e) => handleChange(e)}
                  value={updateData.phone}
                />
              </div>
              <div className={styles.biodata}>
                <h6> Biodata </h6>
                <p> Fullname </p>
                <input
                  type="text"
                  name="fullname"
                  placeholder={data.fullname}
                  onChange={(e) => handleChange(e)}
                  value={updateData.fullname}
                />
                <p> City </p>
                <input
                  type="text"
                  name="city"
                  placeholder={data.city}
                  onChange={(e) => handleChange(e)}
                  value={updateData.city}
                />
                <p> Address </p>
                <input
                  type="text"
                  name="address"
                  placeholder={data.address}
                  onChange={(e) => handleChange(e)}
                  value={updateData.address}
                />
                <p> Post Code </p>
                <input
                  type="text"
                  name="postcode"
                  placeholder={data.postcode}
                  onChange={(e) => handleChange(e)}
                  value={updateData.postcode}
                />
              </div>
            </div>
            <button type="submit" onClick={(e) => handleData(e)}>
              {" "}
              Save{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
