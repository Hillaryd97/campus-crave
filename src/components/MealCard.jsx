// import { AiFillPlusCircle } from "react-icons/ai";

const MealCard = ({ meal, image }) => {
  return (
    <div className="mb-2 w-5/6 justify-center items-center bg-gray-100 shadow-md hover:border border-orange-200 ease-in-out duration-300 rounded-2xl p-2">
      <div className="grid grid-cols-3">
        <div className="">
          <img src={image} alt="/" className="lg:h-[9em] h-[8em] rounded-2xl" />
        </div>
        <div className="grid col-span-2 pl-2 py-2">
          <h3 className="text-lg font-bold">{meal.title}</h3>
          <p className="text-sm text-gray-600">
            {meal.description.length > 150
              ? `${meal.description.substring(0, 150)}...`
              : meal.description}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="pt-2 font-semibold text-orange-600">₦{meal.price}.00</p>
        <div className="text-xl rounded-full bg-orange-600 h-fit w-fit text-white cursor-pointer px-2 py-1">+</div>
      </div>
    </div>
  );
};

export default MealCard;
