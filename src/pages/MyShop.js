import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/Card";
import DeleteContent from "../components/deleteContent/DeleteContent";
import { getUserProducts } from "../store/products/productSlice";
import {
  Description,
  GridContainer,
  Price,
  PriceNumber,
} from "./shop/ShopStyle";
import { Wrapper } from "./shop/ShopStyle";
import { StyledButton } from "../globalStyle";

function MyShop() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productId, setProductId] = useState(0);
  const dispatch = useDispatch();

  const { userProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getUserProducts(1));
  }, [dispatch]);

  let totalPrice = userProducts?.reduce(function (prev, current) {
    return prev + +current.product.price;
  }, 0);

  return (
    <Wrapper>
      {modalIsOpen && (
        <DeleteContent setModalIsOpen={setModalIsOpen} productId={productId} />
      )}
      {!userProducts.length ? (
        <Description>Nothing in this bag.</Description>
      ) : (
        <>
          <GridContainer>
            {userProducts.map((product) => (
              <Card
                key={product.id}
                boughtProductId={product.id}
                product={product.product}
                size={product.size}
                setModalIsOpen={setModalIsOpen}
                setProductId={setProductId}
              />
            ))}
          </GridContainer>
          <Price>
            PRICE IN TOTAL: <PriceNumber>{totalPrice} BAM</PriceNumber>
          </Price>
          <StyledButton style={{ width: "27.5%" }}>Buy</StyledButton>
        </>
      )}
    </Wrapper>
  );
}

export default MyShop;
