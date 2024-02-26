import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import SearchSection from "../components/SearchSection";
import SelectCategory from "../components/SelectCategory";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const products = useProducts();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="w-full  pb-20">
      <div className="w-full h-28 mx-auto px-4 flex justify-around items-center">
        <SearchSection
          search={search}
          setSearch={setSearch}
          setQuery={setQuery}
        />
        <SelectCategory setQuery={setQuery} />
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
