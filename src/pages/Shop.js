import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import Card from "../components/card/Card";
import { GridContainer } from "../components/card/CardStyle";
import {
  getFilteredProducts,
  getPaginatedProducts,
  getProducts,
} from "../store/products/productSlice";
import { Wrapper } from "./ShopStyle";

function Shop() {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useSelector((state) => state.products);

  useEffect(() => {
    if (searchParams.get("category") === "view-all") {
      dispatch(getProducts());
      dispatch(
        getPaginatedProducts({ currentPage, numberOfProductsForPage: 9 })
      );
    } else {
      dispatch(getFilteredProducts(category));
    }
  }, [dispatch, category, searchParams, currentPage]);

  const { products, paginatedProducts, filteredProducts } = useSelector(
    (state) => state.products
  );

  return (
    <Wrapper>
      {searchParams.get("category") === "view-all" ? (
        <>
          <GridContainer>
            {paginatedProducts?.map((product) => (
              <Card product={product} />
            ))}
          </GridContainer>
          <Pagination
            totalProducts={products.length}
            productsPerPage={9}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <GridContainer>
          {filteredProducts?.map((product) => (
            <Card product={product} />
          ))}
        </GridContainer>
      )}
    </Wrapper>
  );
}

export default Shop;
