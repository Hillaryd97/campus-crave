import { Link, useNavigate } from "react-router-dom";


const NavNormal = ({setShow, size}) => {
  let navigate = useNavigate()

  function handleLogout() {
    sessionStorage.removeItem('token')
    navigate('/')
    console.log("Logged Out!")
  }

  return (
    <nav className="flex justify-between items-center pt-6 pb-0 lg:py-6 lg:pb-8">
      <h1 className="text-3xl font-semibold text-orange-600">
       <Link to={'/Home'}> <i>CampusCrave</i></Link>
      </h1>
      <div className="hidden lg:flex space-x-6 items-center">
        <Link
          className="py-2 font-semibold hover:border-b-4 hover:border-transparent text-lg hover:border-b-orange-600"
          to={"/home"}
        >
          Cafeterias
        </Link>

        <div onClick={() => setShow(true)} className=" cursor-pointer flex space-x-1 border-2 border-orange-600 p-1 rounded-full px-2 duration-300 hover:bg-orange-600 hover:text-white">
          <span className="font-semibold">Cart</span>
          <span className="bg-red-600 text-white p-1 w-6 h-6 text-center text-xs font-bold rounded-full ">{size}</span>
        </div>
       
       <button onClick={handleLogout} className="flex space-x-2 text-white items-center w-full bg-red-600 py-3 px-5 rounded-md hover:bg-red-400 hover: ease-in-out duration-300">Logout</button>
      </div>
      <div className="flex lg:hidden">
        <ul className="">
          <div className="flex flex-col space-y-6 text-white px-4 text-center">
            <button onClick={handleLogout} className="flex space-x-2 text-white items-center w-full bg-red-600 lg:py-3 lg:px-5 p-2 px-3 rounded-md hover:bg-red-400 hover: ease-in-out duration-300">Logout</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavNormal;
