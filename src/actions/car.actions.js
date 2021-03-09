import axios from "axios";

export const addCar = ({ ownerId, carReg, phoneNumber, services }) => (
  dispatch
) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3000/api/addCar", {
        ownerId,
        carReg,
        phoneNumber,
        services,
      })
      .then((res) => {
        dispatch({
          type: "CAR_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "CAR_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "CAR_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};

export const getCars = (req) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const id = req.query.id;
    axios
      .get("http://localhost:3000/api/getCar")
      .then((res) => {
        dispatch({
          type: "GET_CAR_SUCCESS",
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: "GET_CAR_FAILURE",
          payload: { ...error.response },
        });
        reject();
      });
    dispatch({
      type: "GET_CAR_REQUEST",
      payload: {
        loading: true,
      },
    });
  });
};
