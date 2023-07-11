import { useState } from "react";
import supabase from "../config/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import img4 from "../assets/img2.jpg";
import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate("/home");
      //   alert(`Check ${formData.email} for verification link`);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen lg:p-4 ">
      <div className="grid lg:grid-cols-2 lg:w-4/6 w-5/6 h-5/6 bg-white border border-orange-600 shadow-lg rounded lg:p-0 p-3">
        <div className="flex flex-col justify-center lg:px-7 lg:border lg:border-r-orange-600 lg:border-2">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div>
              <h1 className="lg:text-xl text-lg lg:block text-lg font-semibold text-orange-600 pb-3 text-center lg:text-left">
                <i>CampusCrave</i>
              </h1>
              <h2 className="lg:-mt-0 font-semibold text-center lg:text-left text-2xl pb-1">
                Welcome Back
              </h2>
              <p className="text-center lg:text-left text-sm text-gray-400 lg:pb-5 pb-3">
                Enter your details below.
              </p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="text"
                placeholder="Email "
                name="email"
                className="border border-b-1 border-gray-400 py-1.5 mt-1 lg:py-0.5  px-2 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Password "
                name="password"
                className="border border-b-1 border-gray-400 py-1.5 mt-1 lg:py-0.5  px-2 rounded-md"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="shadow-lg bg-orange-600 text-white py-1 px-2 font-bold rounded-md hover:bg-orange-400 hover:ease-in-out duration-300"
            >
              Sign in
            </button>
          </form>
          <p className="text-center pt-10">
            Not Registered?{" "}
            <Link
              to={"/register"}
              className="text-orange-600 hover:text-orange-400 hover:ease-in-out duration-300"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="lg:flex hidden">
          <img src={img4} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.function,

// }

export default Login;
