import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../../assets/images/bx-left-arrow-alt.svg";
import { getProductById } from "../../store/products/productSlice";
import { Image, Wrapper, Container, Description } from "./DetailsStyle";
import { StyledButton } from "../../globalStyle";

function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(param.productId));
  }, [dispatch, param]);

  return (
    <Wrapper>
      <Image src={product?.image} alt="" />
      <Container>
        <LeftArrow
          style={{ alignSelf: "flex-end", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <p>{product?.name?.toUpperCase()}</p>
        <p style={{ alignSelf: "flex-end" }}>{product?.price} BAM</p>
        <Description>{product?.description}</Description>
        <StyledButton
          style={{ minWidth: "40%", alignSelf: "center", marginTop: "20px" }}
        >
          Add to bag
        </StyledButton>
      </Container>
    </Wrapper>
  );
}

export default Details;
