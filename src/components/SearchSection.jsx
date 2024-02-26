import { FiSearch } from "react-icons/fi";
import { createQueryObject } from "../helpers/helper";

function SearchSection({ setQuery, search, setSearch }) {
  // search handler
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
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
  );
}

export default SearchSection;
