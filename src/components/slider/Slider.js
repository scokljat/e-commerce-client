import { useState } from "react";
import { ReactComponent as ArrowLeft } from "../../assets/images/bx-chevron-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/bx-chevron-right.svg";
import { SliderData } from "../../utils/Constants";
import { Image, Container, SlidesContainer } from "./SliderStyle";

function Slider() {
  const [current, setCurrent] = useState(0);

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <Container>
      <ArrowLeft onClick={prevSlide}>Previous</ArrowLeft>
      {SliderData.map((slide, index) => {
        return (
          <SlidesContainer key={index}>
            {index === current && <Image src={slide.image} alt="" />}
          </SlidesContainer>
        );
      })}

      <ArrowRight onClick={nextSlide}>Next</ArrowRight>
    </Container>
  );
}

export default Slider;
