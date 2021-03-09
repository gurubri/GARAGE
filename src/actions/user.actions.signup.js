import axios from "axios";

export const signup = (form) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3000/api/user/signup", form)
      .then((res) => {
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "SIGNUP_FAILURE",
          payload: { error: error.response.data.error },
        });
        reject();
      });
    dispatch({
      type: "SIGNUP_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
