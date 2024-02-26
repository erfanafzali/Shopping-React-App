import { shortenText } from "../helpers/helper";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function BasketCard({ data, clickHandler }) {
  return (
    <div className="w-full flex justify-between items-center md:pb-5">
      <div className="bg-white rounded-xl">
        <img
          src={data.image}
          alt={data.title}
          className="rounded-xl md:max-w-[300px] max-w-[200px] w-[50px]  md:w-[180px]  md:max-h-[80px] max-h-[50px] myImg"
        />
      </div>
      <p className="text-xs font-bold text-white md:text-lg">
        {" "}
        {shortenText(data.title)}
      </p>
      <div className="space-x-2 md:space-x-4 flex justify-center items-center">
        {data.quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <FaTrash className="text-red-500 md:text-2xl" />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>
            <FaMinus className="text-red-500 md:text-2xl" />
          </button>
        )}
        <span className="text-white font-bold md:text-xl">{data.quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>
          <FaPlus className="text-green-500 md:text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
