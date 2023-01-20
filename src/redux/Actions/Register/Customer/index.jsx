import axios from "axios";
import Swal from "sweetalert2";

export const registerCustomer = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "CUSTOMER_REGISTER_PENDING" });
    const res = await axios.post(
      `${process.env.REACT_APP_MY_API_KEY}/auth/register`,
      data
    );
    const customer = res.data.data;
    console.log(customer);
    dispatch({ type: "CUSTOMER_REGISTER_SUCCESS", payload: customer });
    Swal.fire(
      "Success",
      "Register success, we already sent otp to your email. You can verification your account first by your email",
      "success"
    );
    navigate("/verification");
  } catch (err) {
    console.log(err);
    Swal.fire("Warning", "Register failed", "error");
  }
};
