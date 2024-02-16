import { shortenText } from "../helpers/helper";
import { FaShopify } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { image, price, title, id } = data;

  return (
    <div className="w-full flex justify-center items-center flex-col relative">
      <div className="w-[80%] max-h-[300px]  flex flex-col justify-center items-center bg-white rounded-xl relative lg:top-14 md:top-10 sm:top-8 top-9 ">
        <img src={image} alt="" className="w-[100%] max-w-[80%] myImg " />
      </div>
      <div className="w-full h-[120px] sm:h-[130px] md:h-[150px] lg:h-[180px] rounded-3xl cardLenear pt-10 md:pt-14 lg:pt-16 text-xs  md:text-base lg:text-lg shadow-md shadow-white">
        <div className="w-full font-semibold sm:font-bold text-white text-center">
          {shortenText(title)}
        </div>
        <p className="w-full font-bold text-yellow-400 text-center pt-2">
          {price} $
        </p>
        <div className="w-full flex justify-around items-center mt-3 md:mt-1 ">
          <Link to={`/products/${id}`}>
            <button className="">
              <TbListDetails className="text-white text-lg md:text-xl lg:text-3xl" />
            </button>
          </Link>
          <button className="">
            <FaShopify className="text-green-400 text-lg md:text-xl lg:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
