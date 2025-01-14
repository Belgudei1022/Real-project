import React, { useEffect, useState } from "react";

const FilteredProducts = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`${data.url}`)
      .then((res) => res.json())
      .then(console.log)

  });

  return (
    <div className="w-full h-fit grid grid-cols-2 justify-items-center content-center gap-[30px] lg:grid-cols-3 xl:grid-cols-4">
      {combinedProducts.map((el, index) => (
        <ProductCard key={index} el={el} />
      ))}
    </div>
  );
};

export default FilteredProducts;
