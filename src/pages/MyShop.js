import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/Card";
import DeleteContent from "../components/deleteContent/DeleteContent";
import OrderContent from "../components/orderContent/OrderContent";
import Stripe from "../components/stripe/Stripe";
import {
  Description,
  GridContainer,
  Price,
  PriceNumber,
} from "./shop/ShopStyle";
import { Wrapper } from "./shop/ShopStyle";

function MyShop() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [orderModalIsOpen, setOrderModalIsOpen] = useState(false);
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
      {orderModalIsOpen && (
        <OrderContent
          totalPrice={totalPrice}
          numberOfProducts={userProducts?.length}
          setOrderModalIsOpen={setOrderModalIsOpen}
          userId={user.id}
        />
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
