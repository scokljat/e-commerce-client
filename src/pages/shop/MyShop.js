import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import DeleteContent from "../../components/deleteContent/DeleteContent";
import Stripe from "../../components/stripe/Stripe";
import {
  Wrapper,
  Description,
  GridContainer,
  Price,
  PriceNumber,
} from "./ShopStyle";

function MyShop() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productId, setProductId] = useState(0);

  const { user } = useSelector((state) => state.user);
  const { userProducts } = useSelector((state) => state.products);

  let totalPrice = userProducts?.reduce(function (prev, current) {
    return prev + +current.product.price * current.quantity;
  }, 0);

  return (
    <Wrapper>
      {modalIsOpen && (
        <DeleteContent setModalIsOpen={setModalIsOpen} productId={productId} />
      )}
      {!userProducts?.length ? (
        <Description>Nothing in this bag.</Description>
      ) : (
        <>
          <GridContainer>
            {userProducts?.map((product) => (
              <Card
                key={product?.id}
                bagProductId={product?.id}
                quantity={product?.quantity}
                product={product?.product}
                size={product?.size}
                setModalIsOpen={setModalIsOpen}
                setProductId={setProductId}
              />
            ))}
          </GridContainer>
          <Price>
            PRICE IN TOTAL: <PriceNumber>{totalPrice} BAM</PriceNumber>
          </Price>
          <Stripe totalPrice={totalPrice} userId={user.id} />
        </>
      )}
    </Wrapper>
  );
}

export default MyShop;
