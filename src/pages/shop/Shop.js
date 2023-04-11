import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import Card from "../../components/card/Card";
import { sidebarList } from "../../utils/Constants";
import {
  getFilteredProducts,
  getPaginatedProducts,
  getProducts,
} from "../../store/products/productSlice";
import { Description, Wrapper, GridContainer } from "./ShopStyle";

function Shop() {
  const dispatch = useDispatch();
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (params.category === "View-all") {
      dispatch(getProducts());
      dispatch(
        getPaginatedProducts({ currentPage, numberOfProductsForPage: 9 })
      );
    } else {
      sidebarList.forEach((item) => {
        if (item.category === params.category)
          return dispatch(getFilteredProducts(params.category));
      });
    }
  }, [dispatch, params, currentPage]);

  const { products, paginatedProducts, filteredProducts } = useSelector(
    (state) => state.products
  );

  return (
    <Wrapper>
      {params.category === "View-all" ? (
        <>
          {!paginatedProducts?.length ? (
            <Description>No products in the shop.</Description>
          ) : (
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
          )}
        </>
      ) : (
        <>
          {!filteredProducts?.length ? (
            <Description>No products in this category.</Description>
          ) : (
            <GridContainer>
              {filteredProducts?.map((product) => (
                <Card product={product} />
              ))}
            </GridContainer>
          )}
        </>
      )}
    </Wrapper>
  );
}

export default Shop;
