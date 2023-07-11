// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ buttonText, design, link }) => {
  return (
    <Link
      to={link}
      className={design}
    >
      <p className="text-white
      ">{buttonText}</p>
    </Link>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  icon: PropTypes.string,
  design: PropTypes.string,
  link: PropTypes.string,
};


export default Button;
