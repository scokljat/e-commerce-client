import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../assets/images/bx-x.svg";
import { selectOptions } from "../../utils/Constants";
import { useOnClickOutside } from "../../utils/FunctionOnClickOutside";
import {
  addProductToBag,
  getUserProducts,
} from "../../store/products/productSlice";
import { Container, Size, SizeContainer } from "./SizeBoxStyle";
import { StyledButton } from "../../globalStyle";

function SizeBox({ setSizeBoxIsOpen, productId, detailsPage }) {
  const [size, setSize] = useState("");
  const [productIsInBag, setProductIsInBag] = useState(false);
  const sizeBoxRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { userProducts } = useSelector((state) => state.products);

  const changeHandler = (e) => {
    setSize(e.target.value);
  };

  useOnClickOutside(sizeBoxRef, () => setSizeBoxIsOpen(false));

  useEffect(() => {
    if (userProducts.some((product) => product.size === size)) {
      setProductIsInBag(true);
    } else {
      setProductIsInBag(false);
    }
  }, [userProducts, productIsInBag, size]);

  return (
    <Container
      onChange={changeHandler}
      ref={sizeBoxRef}
      detailsPage={detailsPage}
    >
      <Close
        style={{ alignSelf: "flex-end", cursor: "pointer" }}
        onClick={() => setSizeBoxIsOpen(false)}
      />
      <SizeContainer>
        <Size value="none">Choose size...</Size>
        {selectOptions.map((item) => (
          <Size value={item}>{item}</Size>
        ))}
      </SizeContainer>
      {productIsInBag && <p>You have this product in bag</p>}
      <StyledButton
        disabled={productIsInBag ? true : false}
        style={{ background: productIsInBag && "rgb(240,64,141,0.5)" }}
        onClick={() => {
          dispatch(
            addProductToBag({
              userId: user.id,
              productId: productId,
              size: size,
              quantity: 1,
            })
          ).then(() => dispatch(getUserProducts(user.id)));
          setSizeBoxIsOpen(false);
        }}
      >
        Add
      </StyledButton>
    </Container>
  );
}

export default SizeBox;
