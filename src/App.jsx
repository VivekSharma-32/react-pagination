import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import PAGE_SIZE from "./constants/constants";
const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  //fetch the products
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const data = await response.json();
    setProducts(data?.products);
  };

  const totalProducts = products?.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((next) => next + 1);
  };

  return (
    <div>
      <h1 className="text-center">Pagination</h1>
      {!products?.length ? (
        <h1>No products Found</h1>
      ) : (
        <div className="product-container">
          {products?.slice(start, end)?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
      <Pagination
        handlePageChange={handlePageChange}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        noOfPages={noOfPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
