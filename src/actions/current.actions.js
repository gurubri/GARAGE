import axios from "axios";

export const getCurrentUserInfo = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/api/user/currentUser")
      .then((res) => {
        dispatch({
          type: "GET_CURRENT_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "GET_CURRENT_FAILURE",
          payload: error.response.data.message,
        });
        reject();
      });
    dispatch({
      type: "GET_CURRENT_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
