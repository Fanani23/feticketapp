// import axios from "axios";

// export const GET_DATA_PROFILE = "GET_DATA_PROFILE";

// export const getDataProfile = () => {
//   const token = localStorage.getItem("token");
//   const user = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   return (dispatch) => {
//     console.log("2.");
//     // isLoading
//     dispatch({
//       type: GET_DATA_PROFILE,
//       payload: {
//         isLoading: true,
//         data: false,
//         errorMessage: false,
//       },
//     });

//     // getData
//     axios({
//       method: "GET",
//       url: "http://localhost:3006/auth/user",
//     })
//       .then((response) => {
//         console.log("3.");
//         dispatch({
//           type: GET_DATA_PROFILE,
//           payload: {
//             isLoading: false,
//             data: response.data,
//             errorMessage: false,
//           },
//         });
//       })
//       .catch((error) => {
//         console.log("3.");
//         dispatch({
//           type: GET_DATA_PROFILE,
//           payload: {
//             isLoading: false,
//             data: false,
//             errorMessage: error.message,
//           },
//         });
//       });
//   };
// };
