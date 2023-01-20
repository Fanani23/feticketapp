import axios from "axios";
import Swal from "sweetalert2";

export const verificationAccount = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "VERIFICATION_PENDING" });
    const res = await axios.post(
      `${process.env.REACT_APP_MY_API_KEY}/auth/verification`,
      data
    );
    const otp = res.data.data;
    console.log(otp);
    dispatch({ type: "VERIFICATION_SUCCESS", payload: otp });
    navigate("/login");
    Swal.fire(
      "Success",
      "Verification account success, you can login to your account now",
      "success"
    );
  } catch (err) {
    console.log(err);
    Swal.fire("Warning", "Verification account failed", "error");
  }
};
