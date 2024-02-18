//short size title
export const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

//filter search products
export const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

//filter category products
export const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

// setQueryString
export const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;

  return query;
};

// handle QueryString
export const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return { rest, category };
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return { rest, search };
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};

// handle quantity and total
export const sumProducts = (products) => {
  const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter, total };
};
