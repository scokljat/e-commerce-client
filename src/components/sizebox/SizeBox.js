import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../assets/images/bx-x.svg";
import { selectOptions } from "../../utils/Constants";
import { useOnClickOutside } from "../../utils/FunctionOnClickOutside";
import { getUserById } from "../../store/user/userSlice";
import { addProductToBag } from "../../store/products/productSlice";
import { Container, Size, SizeContainer } from "./SizeBoxStyle";
import { StyledButton } from "../../globalStyle";

function SizeBox({ setSizeBoxIsOpen, productId }) {
  const [size, setSize] = useState("");
  const sizeBoxRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const changeHandler = (e) => {
    setSize(e.target.value);
  };

  useOnClickOutside(sizeBoxRef, () => setSizeBoxIsOpen(false));

  return (
    <Container onChange={changeHandler} ref={sizeBoxRef}>
      <Close
        style={{ alignSelf: "flex-end" }}
        onClick={() => setSizeBoxIsOpen(false)}
      />
      <SizeContainer>
        <Size value="none">Choose size...</Size>
        {selectOptions.map((item) => (
          <Size value={item}>{item}</Size>
        ))}
      </SizeContainer>
      <StyledButton
        onClick={() => {
          dispatch(
            addProductToBag({
              userId: user.id,
              productId: productId,
              size: size,
            })
          ).then(() => dispatch(getUserById(user.id)));

          setSizeBoxIsOpen(false);
        }}
      >
        Add
      </StyledButton>
    </Container>
  );
}

export default SizeBox;
