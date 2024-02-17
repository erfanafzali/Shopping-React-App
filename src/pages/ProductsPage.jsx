import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useProducts } from "../context/ProductContext";
import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import useOutsideClick from "../helpers/useOutsideClick";
import { filterProducts, searchProducts } from "../helpers/helper";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const products = useProducts();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query, products]);

  const optionsRef = useRef();
  useOutsideClick(optionsRef, "optionDropDown", () => setOpen(false));

  const modalHandler = () => {
    setOpen((open) => !open);
  };

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
  };

  return (
    <div className="w-full  pb-20">
      <div className="w-full h-28 mx-auto px-4 flex justify-around items-center">
        <div className="w-full flex justify-center items-center gap-x-2 md:gap-x-4 ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
            type="text"
            className="w-full md:w-1/2 py-1 md:py-1.5 rounded-xl  outline-none  px-3 border-2 border-blue-400 font-semibold text-blue-800 placeholder:pb-1.5 "
            placeholder="Search..."
          />
          <button
            onClick={searchHandler}
            className="flex justify-center items-center bg-blue-400 p-2 md:p-2.5 rounded-3xl border-2 border-white">
            <FiSearch className=" font-bold text-white" />
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            id="optionDropDown"
            onClick={modalHandler}
            className="bg-white flex justify-center items-center gap-x-3 md:gap-x-5 text-base md:text-lg font-bold text-blue-500 text-center px-5 md:px-8 rounded-lg border-2 border-blue-400 py-0.5">
            <span>Category</span>
            <span>
              <TfiMenuAlt />
            </span>
          </button>
          {open && (
            <ul
              onClick={categoryHandler}
              ref={optionsRef}
              className="md:h-44 h-40 pt-2  w-36 md:w-44 bg-blue-300 z-50  absolute top-20 rounded-xl border-2 border-blue-500 flex flex-col justify-start items-start gap-y-1 px-2 md:px-4 font-bold text-sm md:text-base whitespace-nowrap text-blue-800">
              <li className="cursor-pointer hover:bg-blue-600 hover:text-blue-50 px-0.5  rounded-md border-b w-full py-0.5">
                All
              </li>
              <li className="cursor-pointer hover:bg-blue-600 hover:text-blue-50 px-0.5  rounded-md border-b w-full py-0.5">
                Electronics
              </li>
              <li className="cursor-pointer hover:bg-blue-600 hover:text-blue-50 px-0.5  rounded-md border-b w-full py-0.5">
                Jewelery
              </li>
              <li className="cursor-pointer hover:bg-blue-600 hover:text-blue-50 px-0.5  rounded-md border-b w-full py-0.5">{`Men's Clothing`}</li>
              <li className="cursor-pointer hover:bg-blue-600 hover:text-blue-50 px-0.5  rounded-md w-full">{`Women's Clothing`}</li>
            </ul>
          )}
        </div>
      </div>
      {!displayed.length && <Loading />}
      <div className="w-full px-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around items-center gap-y-5 gap-x-8 md:max-w-[1400px] mx-auto">
        {displayed.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
