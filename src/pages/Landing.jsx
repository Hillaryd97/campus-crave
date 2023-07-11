import img7 from "../assets/img1.jpg";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen lg:mx-0 mx-2">
      <Nav />
      <div className=" grid text-center bg-yellow-50 lg:text-left lg:grid-cols-2 lg:mt-16">
        <div className="flex flex-col mt-10 space-y-4">
          <p className="lg:text-5xl text-2xl font-bold">
            Explore your favorite university{" "}
            <span className="text-orange-600">delights.</span>
          </p>
          <div className="lg:hidden flex items-center justify-center py-2">
          <div className="flex w-72 lg:w-[32rem] rounded-3xl outline outline-3 outline-orange-600">
            <img
              src={img7}
              alt=""
              className="w-72 lg:w-[32rem] rounded-3xl p-0"
            />
          </div>
        </div>
          <p className="text-left pb-2 lg:pr-24">
            Discover a world of deliciousness at Campus Crave. Experience the
            ultimate dining convenience right here. From sizzling street food to
            gourmet delights, we have your cravings covered. With a diverse menu
            of fresh and flavorful options.
          </p>
          <div className="flex space-x-3 justify-center lg:justify-start pb-10 lg:pb-2">
            <Link
              to={"/register"}
              className="flex space-x-2 text-white items-center bg-orange-600 py-3 px-5 font-bold rounded-md hover:bg-orange-400 hover:ease-in-out duration-300 "
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="flex space-x-2 items-center text-white bg-orange-500 py-3 px-5 font-bold rounded-md hover:bg-orange-300 hover:ease-in-out duration-300"
            >
              Order Now
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center pb-6">
          <div className="flex w-72 lg:w-[32rem] rounded-3xl outline outline-3 outline-orange-600">
            <img
              src={img7}
              alt=""
              className="w-72 lg:w-[32rem] rounded-3xl p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
