import axios from "axios";

export const Login = ({ email, password }) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3000/api/user/signin", { email, password })
      .then((res) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "LOGIN_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: "LOGOUT_REQUEST" });
    axios
      .get("http://localhost:3000/api/user/logout")
      .then((res) => {
        dispatch({
          type: "LOGOUT_SUCCESS",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGOUT_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};
