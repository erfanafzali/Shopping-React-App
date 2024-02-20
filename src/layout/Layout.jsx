import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCarts } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCarts();
  return (
    <>
      <header className="w-full bg-blue-800  shadow-lg shadow-blue-300">
        <div className="w-full h-auto flex justify-between items-center px-8 md:px-12">
          <Link to="/products">
            <div className=" text-lg md:text-2xl font-bold text-white">
              Shopping App🛒
            </div>
          </Link>
          <Link to="/checkout">
            <div className="py-3 md:py-5 relative">
              <MdShoppingCart className=" text-3xl  md:text-5xl text-green-500" />
              <div className="absolute top-2 right-0 bg-red-500 rounded-full px-1 text-xs md:text-base md:px-2 md:top-3 text-white font-semibold">
                {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
              </div>
            </div>
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}

export default Layout;
