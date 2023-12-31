import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import img4 from "../assets/img4.jpg";
import NavNormal from "../components/NavNormal";

// Components
import CafeteriaCard from "../components/CafeteriaCard";
import Cart from "../components/Cart";
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/reducer";

// import { AiOutlineSearch } from "react-icons/ai";

const Home = ({ token }) => {
  const [fetchError, setFetchError] = useState(null);
  const [cafeteria, setCafeteria] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(true);
  
  // const [{cafItems}, dispatch] = useStateValue();
  function handleSearch(searchTerm) {
    if (searchTerm == "") {
      setSearchResults([]);
      return;
    }

    searchMeals(searchTerm)
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  }

  async function searchMeals(searchTerm) {
    const { data, error } = await supabase
      .from("cafeteria")
      .select()
      .ilike("caf_name", `%${searchTerm}%`);
    if (error) {
      console.error(error);
      return [];
    }

    return data;
  }

  useEffect(() => {
    const fetchCafeteria = async () => {
      const { data, error } = await supabase.from("cafeteria").select();

      if (error) {
        setFetchError("Could Not Fetch Cafeterias");
        setCafeteria(null);
        console.log(error);
      }
      if (data) {
        setCafeteria(data);
        setFetchError(null);
      }
    };
    fetchCafeteria();
  }, []);

  return (
    <div className="bg-yellow-50 min-h-screen mx-2 lg:mx-0">
      <div className="">
        <NavNormal/>
        <p className="text-2xl text-center font-bold pt-5">
          Welcome,{" "}
          <span className="text-orange-600">
            {token.user.user_metadata.fullname}
          </span>
        </p>
        {/* <p className="text-2xl text-center font-bold pt-5">
          Welcome back, <span className="text-orange-600"> Simi</span>
        </p> */}
        <p className="text-xl pb-5 text-center font-semibold">
          Where will you be eating today?{" "}
        </p>
        {/* <Cart /> */}
        <div className="flex  justify-center items-center">
          <input
            className="w-3/6 border border-orange-600 rounded-r-none px-2 py-1 rounded-lg shadow-md mb-5"
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Cafeterias..."
          />
          <button
            onClick={handleSearch}
            className="text-white border bg-orange-600 hover:bg-orange-500 border-orange-600 rounded-l-none px-2 py-1 rounded-lg shadow-md mb-5"
          >
            Search
          </button>
        </div>
        {fetchError && <p>{fetchError}</p>}
        {cafeteria && (
          <div>
            {/* order-by-button */}
            {searchResults.length > 0 ? (
              <div className="grid lg:grid-cols-2 items-center justify-center gap-2">
                {searchResults.map((cafeteria) => (
                   <CafeteriaCard
                   key={cafeteria.id}
                   cafeteria={cafeteria}
                   image={img4}
                 />
                ))}
              </div>
            ) :
           ( <div className="grid lg:grid-cols-2 items-center justify-center gap-2 ">
              {cafeteria.map((cafeteria) => (
                <CafeteriaCard
                  key={cafeteria.id}
                  cafeteria={cafeteria}
                  image={img4}
                />
              ))}
            </div>)}
          </div>
        )}
      </div>
      {/* <div className="grid items-center lg:grid-cols-2 justify-center gap-2 ">
        <CafeteriaCard image={img4} cafeteria={"Nabisi"} />
        <CafeteriaCard image={img4} cafeteria={"Nabisi"} />
        <CafeteriaCard image={img4} cafeteria={"Nabisi"} />
        <CafeteriaCard image={img4} cafeteria={"Nabisi"} />
        <CafeteriaCard image={img4} cafeteria={"Nabisi"} />
      </div> */}
    </div>
  );
};

export default Home;
