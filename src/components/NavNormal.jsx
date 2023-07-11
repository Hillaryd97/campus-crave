import { Link, useNavigate } from "react-router-dom";


const NavNormal = () => {
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
        {/* <a
          className="py-2 hover:border-b-4 hover:border-transparent text-lg hover:border-b-orange-600"
          href="/"
        >
          Home
        </a>
        */}
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
