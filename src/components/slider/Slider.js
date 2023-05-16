import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactComponent as ArrowLeft } from "../../assets/images/bx-chevron-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/bx-chevron-right.svg";
import { SliderData } from "../../utils/Constants";
import {
  Image,
  Container,
  SlidesContainer,
  StyledDot,
  DotContainer,
} from "./SliderStyle";

const variants = {
  initial: (direction) => {
    return { x: direction > 0 ? 1000 : -1000, opacity: 0 };
  },
  animate: {
    x: 0,
    opacity: 1,

    transition: { x: { type: "spring", satisfies: 300, damping: 30 } },
  },
  exit: (direction) => {
    return { x: direction > 0 ? -1000 : 1000, opacity: 0 };
  },
};

function Slider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setDirection(1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setDirection(-1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <>
      <Container>
        <ArrowLeft onClick={prevSlide}>Previous</ArrowLeft>
        {SliderData.map((slide, index) => {
          return (
            <SlidesContainer key={index}>
              {index === current && (
                <AnimatePresence custom={direction}>
                  <Image
                    src={slide}
                    variants={variants}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                    key={index}
                    custom={direction}
                    alt=""
                  />
                </AnimatePresence>
              )}
            </SlidesContainer>
          );
        })}
        <ArrowRight onClick={nextSlide}>Next</ArrowRight>
      </Container>
      <DotContainer>
        {Array.from({ length: SliderData.length }, (_, i) => (
          <StyledDot
            key={i}
            current={current === i ? true : false}
            onClick={() => setCurrent(i)}
          />
        ))}
      </DotContainer>
    </>
  );
}

export default Slider;
