// import { useState } from "react";

import { Link } from "react-router-dom";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";

const CafeteriaCard = ({ cafeteria, image }) => {
  const [{ cafItems }, dispatch] = useStateValue();

  const [items, setItems] = useState({})

  const showCafItem = (cafeteria) => {
    dispatch({
      type: actionType.SET_CAFITEMS,
      cafItems: [...cafeteria],
    });
    localStorage.setItem("cafItems", JSON.stringify(cafItems));

    console.log(cafeteria);
  };

  return (
    <Link to={"/meals"}>
      <div
        onClick={() => showCafItem(cafeteria)}
        className="grid grid-cols-3 mb-2 w-5/6 justify-center items-center bg-gray-100 shadow-md hover:border border-orange-200 ease-in-out duration-300 rounded-2xl"
      >
        <div className="w-fit h-fit">
          <img
            src={image}
            alt="/"
            className="rounded-l-2xl lg:h-[9em] h-[8em]"
          />
        </div>
        <div className="grid col-span-2 px-2 py-2">
          <h3 className="text-lg font-bold">{cafeteria.caf_name}</h3>
          <p className="text-sm text-gray-600">{cafeteria.caf_description}</p>
          <p className="text-sm text-right pt-2 font-semibold text-orange-600">
            Ratings: 5 Stars
          </p>
        </div>
        {/* <div className="grid col-span-2 px-2 py-2 pr-">
      <img src={image} alt="" className="lg:h-[10em] h-[9em]" />
        <h3 className="text-lg font-bold">Nabis</h3>
        <p className="text-sm text-gray-600">
          loremi fjfde idi jwij nfeiwij nwiji jviw eijn wii kidjigrj eiwkirji
          wrji wrjke jiefjir efwj fejjh fehjfkid rh fhe unh vfir hieri {" "}
        </p>
        <p className="text-sm text-right pt-2 font-semibold text-orange-600">
          Ratings: 5 Stars
        </p>
      </div>  */}
      </div>
    </Link>
  );
};

export default CafeteriaCard;
