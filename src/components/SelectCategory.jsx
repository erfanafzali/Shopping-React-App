import { useRef, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { createQueryObject } from "../helpers/helper";
import useOutsideClick from "../helpers/useOutsideClick";

function SelectCategory({ setQuery }) {
  const [open, setOpen] = useState(false);
  const optionsRef = useRef();
  useOutsideClick(optionsRef, "optionDropDown", () => setOpen(false));

  const modalHandler = () => {
    setOpen((open) => !open);
  };
  
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
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
  );
}

export default SelectCategory;
