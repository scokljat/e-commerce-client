import { Wrapper, Content } from "./ModalStyle";

function Modal({ children, setModalIsOpen }) {
  return (
    <Wrapper onClick={() => setModalIsOpen(false)}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Modal;
