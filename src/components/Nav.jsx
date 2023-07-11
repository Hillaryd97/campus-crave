import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center pt-6 pb-0 lg:py-6 lg:pb-8">
      <h1 className="text-3xl font-semibold text-orange-600">
        <Link to={"/Home"}>
          {" "}
          <i>CampusCrave</i>
        </Link>
      </h1>
      <div className="hidden lg:flex space-x-6 items-center">
        <Link
          to={"/login"}
          className="flex space-x-2 items-center text-white  bg-orange-600 py-3 px-5 font-bold rounded-md hover:bg-orange-400 hover:ease-in-out duration-300"
        >
          Login
        </Link>
      </div>
      <div className="flex lg:hidden">
        <ul className="">
          <div className="flex flex-col space-y-6 text-white px-4 text-center">
            <Link
              to={"/login"}
              className="flex text-white space-x-2 items-center w-full bg-orange-600 py-3 px-5 rounded-md hover:bg-orange-400 hover: ease-in-out duration-300"
            >
              Login
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
