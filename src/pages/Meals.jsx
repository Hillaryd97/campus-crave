import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import img4 from "../assets/img8.webp";
import NavNormal from "../components/NavNormal";
import MealCard from "../components/MealCard";
import Cart from "../components/Cart";
// import { useStateValue } from "../context/StateProvider";

const Meals = () => {
  const [fetchError, setFetchError] = useState(null);
  const [meal, setMeal] = useState(null);
  const [orderBy, setOrderby] = useState("created_at");
  const [ascending, setAscending] = useState({ ascending: true });
  const [isActive, setIsActive] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (meal) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (meal.id === product.id) isPresent = true;
    });
    // cart.push(meal)
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, meal]);
    console.log(cart);
  };

  const handleChange = (meal, d) => {
    const ind = cart.indexOf(meal);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

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
      }
    };
    fetchMeal();
  }, [orderBy, ascending]);

  return (
    <div className="bg-yellow-50 min-h-screen mx-2 lg:mx-0">
      <div className="">
        <NavNormal setShow={setShow} size={cart.length} />
        {show ? <Cart setShow={setShow} cart={cart} setCart={setCart} handleChange={handleChange} /> : ""}
        {warning && <div className="h-[40px] w-4/6 absolute right-0 top-[10%] text-white p-1 rounded-lg bg-red-500">Item is already in your cart</div>}
        {/* <p className="text-2xl mb-5 font-bold">What will you be eating?</p> */}
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
                  // handleClick();
                }}
              >
                Title
              </button>
              <button
                className="bg-orange-600 px-2 py-0.5 lg:text-base text-sm text-white rounded-lg hover:bg-orange-400"
                onClick={() => {
                  setOrderby(`type`);
                  // handleClick();
                }}
              >
                Dish Type
              </button>
            </div>
            <div className="flex flex-col ">
              <p className="pb-5 text-sm text-gray-500">
                {/* {cafItems.caf_description} */}
              </p>
            </div>
            {searchResults.length > 0 ? (
              <div className="grid lg:grid-cols-2 items-center justify-center gap-2">
                {searchResults.map((meal) => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    image={img4}
                    handleClick={handleClick}
                  />
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 items-center justify-center gap-2 ">
                {meal.map((meal) => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    image={img4}
                    handleClick={handleClick}
                  />
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
