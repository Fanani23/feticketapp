import axios from "axios";
import Swal from "sweetalert2";

export const loginCustomer = (data, navigate) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "CUSTOMER_LOGIN_PENDING" });
    const res = await axios.post(
      `${process.env.REACT_APP_MY_API_KEY}/auth/login`,
      data
    );
    const customer = res.data.data;
    console.log(customer, "data customer");
    const token = customer.token;
    const id = customer.id;
    const fullname = customer.fullname;
    const phone = customer.phone;
    const email = customer.email;
    console.log(token, "token customer");
    localStorage.setItem("token", token);
    localStorage.setItem("user_id", id);
    localStorage.setItem("user_fullname", fullname);
    localStorage.setItem("user_phone", phone);
    localStorage.setItem("user_email", email);
    dispatch({ type: "CUSTOMER_LOGIN_SUCCESS", payload: customer });
    Swal.fire("Success", "Login success", "success");
    navigate("/explore");
  } catch (err) {
    console.log(err);
    Swal.fire("Warning", "Login failed", "error");
  }
};
