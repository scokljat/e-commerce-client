import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedProducts } from "../../store/products/productSlice";
import Card from "../../components/card/Card";
import useDebounce from "../../components/search/UseDebounce";
import { GridContainer, Description } from "../shop/ShopStyle";
import { StyledInput } from "./SearchStyle";
import { Wrapper } from "../home/HomeStyle";

function Search() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { searchedProducts } = useSelector((state) => state.products);

  const debouncedValue = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue.length > 0)
      dispatch(getSearchedProducts(debouncedValue));
  }, [dispatch, debouncedValue]);

  return (
    <Wrapper style={{ gap: "2rem", width: "100%" }}>
      <StyledInput
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      {debouncedValue !== "" && !searchedProducts?.length ? (
        <Description>No products in this category.</Description>
      ) : (
        <GridContainer>
          {searchedProducts?.map((product) => (
            <Card product={product} key={product?.id} />
          ))}
        </GridContainer>
      )}
    </Wrapper>
  );
}

export default Search;
