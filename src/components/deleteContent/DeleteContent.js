import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../assets/images/bx-x.svg";
import Modal from "../modal/Modal";
import { Wrapper, ButtonContainer } from "./DeleteContentStyle";
import { deleteProductFromBag } from "../../store/products/productSlice";
import { getUserById } from "../../store/user/userSlice";
import { StyledButton } from "../../globalStyle";

export default function DeleteContent({ setModalIsOpen, productId }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <Modal setModalIsOpen={setModalIsOpen}>
      <Wrapper>
        <Close
          style={{ alignSelf: "flex-end", cursor: "pointer" }}
          onClick={() => setModalIsOpen(false)}
        />
        <p>Are you sure you want to delete this product ?</p>
        <ButtonContainer>
          <StyledButton
            onClick={() => {
              dispatch(deleteProductFromBag(productId)).then(() =>
                dispatch(getUserById(user.id))
              );
            }}
          >
            Yes
          </StyledButton>
          <StyledButton onClick={() => setModalIsOpen(false)}>
            Cancel
          </StyledButton>
        </ButtonContainer>
      </Wrapper>
    </Modal>
  );
}
