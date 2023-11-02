import React from "react";

export default function Filter({ filters, setFilters }) {
  const categoryList = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];
  const handleCategoryChange = (selectedCategory) => {
    setFilters({ ...filters, category: selectedCategory });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, price: { min, max } });
  };


  return (
    <div className="mt-10 hidden md:block p-1">
      <h3 className="text-red-500 font-semibold text-2xl">Category</h3>
      <div className="mt-2">
        {categoryList.map((category, i) => (
          <div
            onClick={() => handleCategoryChange(category)}
            key={i}
            className="flex gap-2 "
          >
            <input
              type="checkbox"
              id={`category-${i}`}
              checked={category === filters.category}
            />
            <label>{category}</label>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2 flex-col">
        <h3 className="text-red-500 font-semibold text-2xl">Price</h3>
        <input
          onChange={(e) => handlePriceChange(e.target.value, filters.price.max)}
          type="number"
          value={filters.price.min}
          className="outline-none"
          placeholder="Min"
        />
        <input
          onChange={(e) => handlePriceChange(filters.price.min, e.target.value)}
          type="number"
          value={filters.price.max}
          className="outline-none"
          placeholder="Max"
        />
      </div>
     
    </div>
  );
}