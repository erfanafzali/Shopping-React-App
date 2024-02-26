import { MdPriceChange } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

function BasketSidebar({ state, clickHandler }) {
  return (
    <div className="w-full md:w-1/3 rounded-xl border-2 mt-6 py-4 ">
      <div className="w-full px-4 py-2 space-y-2 md:space-y-5 font-bold text-white md:text-lg">
        <div className="w-full flex justify-start items-center">
          <div className="flex justify-center items-center gap-x-1">
            <span>
              <MdPriceChange className="text-green-500" />
            </span>
            <span>Total:</span>
          </div>
          <div className="text-sm md:text-lg font-semibold  pl-2 text-green-500">
            {state.total} $
          </div>
        </div>
        <div className="w-full flex justify-start items-center">
          <div className="flex justify-center items-center gap-x-1">
            <span>
              <FaHashtag className="text-orange-500" />
            </span>
            <span>Quantity:</span>
          </div>
          <div className="text-sm md:text-lg font-semibold text-orange-500 pl-2 ">
            {state.itemsCounter}
          </div>
        </div>
        <div className="w-full flex justify-start items-center">
          <div className="flex justify-center items-center gap-x-1">
            <span>
              <BsFillPatchCheckFill className="text-yellow-500" />
            </span>
            <span>Status:</span>
          </div>
          <div className="text-sm md:text-lg font-semibold text-yellow-500 pl-2 ">
            {!state.checkout && "Pending..."}
          </div>
        </div>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")} className="w-full px-5 mt-4">
        <div className="w-full bg-white rounded-xl py-1 font-bold text-blue-600 text-lg">
          Checkout
        </div>
      </button>
    </div>
  );
}

export default BasketSidebar;
