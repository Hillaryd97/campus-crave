import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import img4 from "../assets/img8.webp";
import NavNormal from "../components/NavNormal";
import MealCard from "../components/MealCard";
import { HiSortAscending } from "react-icons/Hi";
import { HiSortDescending } from "react-icons/Hi";
import { AiOutlineSearch } from "react-icons/Ai";

const Meals = () => {
  const [fetchError, setFetchError] = useState(null);
  const [meal, setMeal] = useState(null);
  const [orderBy, setOrderby] = useState("created_at");
  const [ascending, setAscending] = useState({ ascending: true });
  const [isActive, setIsActive] = useState("");

  const handleClick = () => {
    console.log("cloicck");

    setIsActive("bg-blue-800");
  };

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
      }
    };
    fetchMeal();
  }, [orderBy, ascending]);

  return (
    <div className="bg-yellow-50 min-h-screen mx-2 lg:mx-0">
      <div className="">
        <NavNormal />
        <p className="text-4xl pb-5 font-bold">NGK Cafeteria</p>
        <div className="flex  justify-center items-center">
          <input
            className="w-3/6 border border-orange-500 rounded-r-none px-2 py-1 rounded-lg shadow-md mb-2"
            type="text"
            name=""
            id=""
          />
          <div className="text-black border bg-orange-500 border-orange-500 rounded-l-none px-2 py-1 rounded-lg shadow-md mb-2">
            <AiOutlineSearch size={23}/>
          </div>
        </div>{" "}
        {fetchError && <p>{fetchError}</p>}
        {meal && (
          <div className="">
            <div className="flex justify-center space-x-3 pb-8">
              <p>Order by:</p>
              <button
                className=" py-0.5 lg:text-base text-sm  rounded-lg hover:text-orange-600"
                onClick={() => {
                  setOrderby("price");
                  setAscending({ ascending: false });
                }}
              >
                <HiSortAscending size={22} />
              </button>{" "}
              <button
                className={`${isActive} py-0.5 lg:text-base text-sm rounded-lg hover:text-orange-600`}
                onClick={() => {
                  setOrderby("price");
                  setAscending({ ascending: true });
                }}
              >
                <HiSortDescending size={22} />
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
            <div className="grid lg:grid-cols-2 items-center justify-center gap-2 ">
              {meal.map((meal) => (
                <MealCard key={meal.id} meal={meal} image={img4} />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <div className="grid items-center lg:grid-cols-2 justify-center gap-2 ">
          <MealCard image={img4} meal={"Nabisi"} />
          <MealCard image={img4} meal={"Nabisi"} />
          <MealCard image={img4} meal={"Nabisi"} />
          <MealCard image={img4} meal={"Nabisi"} />
          <MealCard image={img4} meal={"Nabisi"} />
        </div> */}
    </div>
  );
};

export default Meals;
