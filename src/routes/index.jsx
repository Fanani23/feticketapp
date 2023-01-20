import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import Verification from "../pages/Auth/Verification";
import FlightDetail from "../pages/FlightDetail";
import Flight from "../pages/Flight";
import Main from "../pages/Main";
import Explore from "../pages/Explore";
import Payment from "../pages/Payment";
import Profile from "../pages/Profile";
import BookingPass from "../pages/BookingPass";
import MyBooking from "../pages/MyBooking";
import Swal from "sweetalert2";

const Router = () => {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Outlet />;
    } else {
      Swal.fire("Warning", "Please login first", "error");
      return <Navigate to="/login" />;
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/flight" element={<PrivateRoute />}>
          <Route index element={<Flight />} />
        </Route>
        <Route path="/flight-detail/:id" element={<PrivateRoute />}>
          <Route index element={<FlightDetail />} />
        </Route>
        <Route path="/payment/:id" element={<PrivateRoute />}>
          <Route index element={<Payment />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/bookingpass/:id" element={<PrivateRoute />}>
          <Route index element={<BookingPass />} />
        </Route>
        <Route path="/mybooking" element={<PrivateRoute />}>
          <Route index element={<MyBooking />} />
        </Route>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
