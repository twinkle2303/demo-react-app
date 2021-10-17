import React, { Fragment, useState } from "react";
import Details from "./Details";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.length === 0 || formData.password.length === 0) {
      return showToastMessage("Please fill up all the fields!", false);
    }
    showToastMessage("Thanks for login!", true);

    //clearing state
    setFormData({
      email: "",
      password: "",
    });
  };

  const showToastMessage = (text, status) => {
    if (status) {
      toast.success(text, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(text, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">Login</button>
      </form>
      <Details formData={formData} />
      <ToastContainer />
    </Fragment>
  );
};

export default LoginForm;
