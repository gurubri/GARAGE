import React, { useEffect, useState } from "react";
import axios from "axios";
const Logout = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/logout")
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("User");
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  props.history.push("/signin");
  return <div>We are sorry to see you leave</div>;
};

export default Logout;
