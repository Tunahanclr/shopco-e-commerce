import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import ReactPaginate from "react-paginate"; // ReactPaginate'ı içe aktardık
import { getProducts } from "../../redux/productSlice";
import ProductCard from "../../components/Products/ProductCard";

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { keyword } = useSelector((state) => state.generel); // generalSlice'dan "general" olarak değiştirildi

  const [filters, setFilters] = useState({
    price: { min: "", max: "" },
    category: "",
  });
  const [itemOffset, setItemOffset] = useState(0);

  const filteredProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const keywordLower = keyword.toLowerCase();
    const { price, category } = filters;

    const isKeywordMatch = productName.includes(keywordLower);
    const isPriceMatch =
      (price.min === "" || parseFloat(product.price) >= parseFloat(price.min)) &&
      (price.max === "" || parseFloat(product.price) <= parseFloat(price.max));
    const isCategoryMatch =
      category === "" || product.category === category;

    return isKeywordMatch && isPriceMatch && isCategoryMatch;
  });

  const endOffset = itemOffset + 8;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / 8);

  const handlePageClick = (selected) => {
    const newOffset = selected * 8; // Her sayfada 8 ürün gösteriliyor
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="max-w-[1500px] mt-2 mx-auto flex">
      <div>
        <Filter filters={filters} setFilters={setFilters} />
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex flex-col justify-center mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid-cols-2 p-2 md:p-0 sm:grid-cols-3 md:grid-cols-4 space-x-5 md:space-x-11 items-center place-content-center mt-4 grid max-w-[1100px] mx-auto">
              {currentItems.map((product, i) => (
                <div key={i} className="">
                  <ProductCard product={product} />
                </div>
              ))}
              <div>
              <ReactPaginate
              className="pagination"
                breakLabel="..."
                nextLabel=" >"
                onPageChange={({ selected }) => handlePageClick(selected)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
              </div>
            </div>
          ) : (
            <div className="text-center text-2xl mt-4">No products found.</div>
          )}
        </div>
      )}
    </div>
  );
}
