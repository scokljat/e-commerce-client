import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ArrowDown } from "../../assets/images/bx-down-arrow-alt.svg";
import Slider from "../../components/slider/Slider";
import Card from "../../components/card/Card";
import { getFilteredProducts } from "../../store/products/productSlice";
import { GridContainer, Description } from "../shop/ShopStyle";
import { Wrapper, ArrowContainer, HomeSection, Title } from "./HomeStyle";

function Home() {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getFilteredProducts("New"));
  }, [dispatch]);

  return (
    <Wrapper>
      <Slider />
      <ArrowContainer href="#new">
        <ArrowDown style={{ padding: "0.3rem" }} />
      </ArrowContainer>
      <HomeSection id="new">
        <Title>New products</Title>
        {!filteredProducts?.length ? (
          <Description>No products in this category.</Description>
        ) : (
          <GridContainer>
            {filteredProducts?.map((product) => (
              <Card product={product} key={product?.id} />
            ))}
          </GridContainer>
        )}
      </HomeSection>
    </Wrapper>
  );
}

export default Home;
