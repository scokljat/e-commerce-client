import { ButtonContainer } from "../../components/deleteContent/DeleteContentStyle";
import Slider from "../../components/slider/Slider";
import { Wrapper, StyledButton } from "./HomeStyle";

function Home() {
  return (
    <Wrapper>
      <Slider />
      {/* <ButtonContainer>
        <StyledButton>Shop now</StyledButton>
        <StyledButton>Contact us</StyledButton>
      </ButtonContainer> */}
    </Wrapper>
  );
}

export default Home;
