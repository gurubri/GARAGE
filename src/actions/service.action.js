import axios from "axios";

export const getAllServices = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/api/allServices")
      .then((res) => {
        dispatch({
          type: "GET_SERVICE_SUCCESS",
          payload: res.data.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "GET_SERVICE_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "GET_SERVICE_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
