import { ReactComponent as Close } from "../../assets/images/bx-x.svg";
import { selectOptions } from "../../utils/Constants";
import { Container, Size, SizeContainer } from "./SizeBoxStyle";
import { StyledButton } from "../../globalStyle";

function SizeBox({ setSizeBoxIsOpen }) {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container onChange={changeHandler}>
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
      <StyledButton>Add</StyledButton>
    </Container>
  );
}

export default SizeBox;
