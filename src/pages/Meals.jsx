import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import img4 from "../assets/img8.webp";
import NavNormal from "../components/NavNormal";
import MealCard from "../components/MealCard";
// import { data } from "autoprefixer";
import { useStateValue } from "../context/StateProvider";

// import { fetchCaf } from "../utils/fetchLocalStorageData";
// import { HiSortAscending } from "react-icons/Hi";
// import { HiSortDescending } from "react-icons/Hi";
// import { AiOutlineSearch } from "react-icons/Ai";

const Meals = () => {
  const [fetchError, setFetchError] = useState(null);
  const [meal, setMeal] = useState(null);
  const [orderBy, setOrderby] = useState("created_at");
  const [ascending, setAscending] = useState({ ascending: true });
  const [isActive, setIsActive] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [{ cafItems }, dispatch] = useStateValue;

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("cafItems"));
  //   if (items) {
  //     setItems(items);
  //   }
  //   console.log(items[0]);
  // }, []);

  const handleClick = () => {
    console.log("cloicck");

    setIsActive("bg-blue-800");
  };

  function handleSearch(searchTerm) {
    if (searchTerm.trim() == "") {
      setSearchResults([]);
      return;
    }

    searchMeals(searchTerm)
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  }

  async function searchMeals(searchTerm) {
    const { data, error } = await supabase
      .from("meal")
      .select()
      .ilike("title", `%${searchTerm}%`);
    if (error) {
      console.error(error);
      return [];
    }

    return data;
  }

  useEffect(() => {
    const fetchMeal = async () => {
      const { data, error } = await supabase
        .from("meal")
        .select()
        .order(orderBy, ascending);

      if (error) {
        setFetchError("Could Not Fetch Meals");
        setMeal(null);
        console.log(error);
      }
      if (data) {
        setMeal(data);
        setFetchError(null);
        console.log(data);
      }
    };
    fetchMeal();
  }, [orderBy, ascending]);

  return (
    <div className="bg-yellow-50 min-h-screen mx-2 lg:mx-0">
      <div className="">
        <NavNormal />
        <div className="flex  justify-center items-center">
          <input
            className="w-3/6 border border-orange-500 rounded-r-none px-2 py-1 rounded-lg shadow-md mb-2"
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Meals..."
          />
          <button
            onClick={handleSearch}
            className="text-white border bg-orange-500 border-orange-500 rounded-l-none px-2 py-1 rounded-lg shadow-md mb-2"
          >
            Search
          </button>
        </div>{" "}
        {fetchError && <p>{fetchError}</p>}
        {meal && (
          <div className="">
            <div className="flex justify-center space-x-3 pb-8">
              <p>Order by:</p>
              <button
                className=" bg-orange-600 px-2 py-0.5 lg:text-base text-sm text-white rounded-lg hover:bg-orange-400"
                onClick={() => {
                  setOrderby("price");
                  setAscending({ ascending: false });
                }}
              >
                Asc
              </button>{" "}
              <button
                className={`${isActive} bg-orange-600 px-2 py-0.5 lg:text-base text-sm text-white rounded-lg hover:bg-orange-400`}
                onClick={() => {
                  setOrderby("price");
                  setAscending({ ascending: true });
                }}
              >
                Desc
              </button>
              <button
                className="bg-orange-600 px-2 py-0.5 lg:text-base text-sm text-white rounded-lg hover:bg-orange-400"
                onClick={() => {
                  setAscending({ ascending: true });
                  setOrderby("created_at");
                }}
              >
                Date Added
              </button>
              <button
                className="bg-orange-600 px-2 py-0.5 lg:text-base text-sm text-white rounded-lg hover:bg-orange-400"
                onClick={() => {
                  setOrderby("title");
                  handleClick();
                }}
              >
                Title
              </button>
              <button
                className="bg-orange-600 px-2 py-0.5 lg:text-base text-sm text-white rounded-lg hover:bg-orange-400"
                onClick={() => {
                  setOrderby(`type`);
                  handleClick();
                }}
              >
                Dish Type
              </button>
            </div>
            <div className="flex flex-col ">
              {/* <p className="text-4xl font-bold">{cafItems.caf_name}</p> */}
              <p className="pb-5 text-sm text-gray-500">
                {/* {cafItems.caf_description} */}
              </p>
            </div>
            {searchResults.length > 0 ? (
              <div className="grid lg:grid-cols-2 items-center justify-center gap-2">
                {searchResults.map((meal) => (
                  <MealCard key={meal.id} meal={meal} image={img4} />
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 items-center justify-center gap-2 ">
                {meal.map((meal) => (
                  <MealCard key={meal.id} meal={meal} image={img4} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Meals;
