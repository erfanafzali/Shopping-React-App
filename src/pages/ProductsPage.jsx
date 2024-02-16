import Card from "../components/Card";
import Loading from "../components/Loading";
import { useProducts } from "../context/ProductContext";
import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className="w-full backgroundlenear h-[100%] pb-32">
      <div className="w-full h-28 mx-auto px-4 flex justify-around items-center">
        <div className="w-full flex justify-center items-center gap-x-2 md:gap-x-4 ">
          <input
            type="text"
            className="w-full md:w-1/2 py-1 md:py-1.5 rounded-xl  outline-none  px-3 border-2 border-blue-400 font-semibold text-blue-800 placeholder:pb-1.5 "
            placeholder="Search..."
          />
          <button className="flex justify-center items-center bg-blue-400 p-2 md:p-2.5 rounded-3xl border-2 border-white">
            <FiSearch className=" font-bold text-white" />
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="bg-white flex justify-center items-center gap-x-3 md:gap-x-5 text-base md:text-lg font-bold text-blue-500 text-center px-5 md:px-8 rounded-lg border-2 border-blue-400 py-0.5">
            <span>Category</span>
            <span>
              <TfiMenuAlt />
            </span>
          </button>
        </div>
      </div>
      {!products.length && <Loading />}
      <div className="w-full px-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around items-center gap-y-5 gap-x-8 md:max-w-[1400px] mx-auto">
        {products.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
