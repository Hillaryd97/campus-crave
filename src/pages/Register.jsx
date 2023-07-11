import { useState } from "react";
import supabase from "../config/supabaseClient";
import { Link } from "react-router-dom";
import img4 from "../assets/img5.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    // phone: "",
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            fullname: formData.fullname,
            // phone: formData.phone,
          },
        },
      });
      alert(`Check ${formData.email} for verification link`);
      {
        <p>Check ${formData.email} for verification link</p>;
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen lg:p-4 ">
    <div className="grid lg:grid-cols-2 lg:w-4/6 w-5/6 h-5/6 bg-white border border-orange-600 shadow-lg rounded lg:p-0 p-3">
        <div className="lg:flex hidden">
          <img src={img4} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center lg:px-7 lg:border lg:border-r-orange-600 lg:border-2">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
            <h1 className="lg:text-xl text-lg lg:block text-lg font-semibold text-orange-600 pb-3 text-center lg:text-left">
            <i>CampusCrave</i>
          </h1>
          <h2 className="lg:-mt-0 font-semibold text-center lg:text-left text-2xl pb-1">Get started</h2>
          <p className="text-center lg:text-left text-sm text-gray-400 lg:pb-5 pb-3">Create your account now</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullname"
                onChange={handleChange}
                className="border border-b-1 border-gray-400 p-1.5 mt-1 lg:py-0.5 px-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="text"
                placeholder="Email Address "
                name="email"
                onChange={handleChange}
                className="border border-b-1 border-gray-400 p-1.5 mt-1 lg:py-0.5 px-2 rounded-md"
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
                onChange={handleChange}
                className="border border-b-1 border-gray-400 p-1.5 mt-1 lg:py-0.5 px-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="shadow-lg bg-orange-600 text-white py-1 px-2 font-bold rounded-md hover:bg-orange-400 hover:ease-in-out duration-300"
            >
              Create Account
            </button>
          </form>
          <p className="text-center pt-10">
            Already have an account?{" "}
            <Link to={"/login"} className="text-orange-600 hover:text-orange-400 hover:ease-in-out duration-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
