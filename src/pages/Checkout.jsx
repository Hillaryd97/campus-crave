import { Link } from "react-router-dom";
import NavNormal from "../components/NavNormal";
import img4 from "../assets/img9.jpg";

const Checkout = () => {
  return (
    <div className="bg-yellow-50 min-h-screen mx-2 lg:mx-0">
      <div className="">
        <NavNormal />

        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-center font-bold mb-2">Thanks for ordering! Your food is on the way!</p>
          <img src={img4} className="w-2/5 text-center" alt="" />

          <Link to="/meals" className="bg-orange-600 rounded-lg mt-4 text-white py-2 px-3 hover:bg-orange-500">
            See more dishes while you wait!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
