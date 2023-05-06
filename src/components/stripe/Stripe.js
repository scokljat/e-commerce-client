import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { deleteAllProductsFromBag } from "../../store/products/productSlice";
import { StyledButton } from "../../globalStyle";

function Stripe({ totalPrice, userId }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "Products from bag",
    price: 0,
  });

  useEffect(() => {
    setProduct({ ...product, price: totalPrice });
  }, [totalPrice]);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:2000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then(() => {
        dispatch(deleteAllProductsFromBag(userId));
      })
      .catch((err) => console.log(err));
  };
  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_PUBLIC_KEY}
      name="Pay With Credit Card"
      amount={totalPrice * 100}
      token={makePayment}
    >
      <StyledButton>Buy now</StyledButton>
    </StripeCheckout>
  );
}

export default Stripe;
