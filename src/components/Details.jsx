import React, { Fragment } from "react";

const Details = ({ formData }) => {
  return (
    <Fragment>
      <h4>Email:{formData.email}</h4>
      <h4>Password:{formData.password}</h4>
    </Fragment>
  );
};

export default Details;
