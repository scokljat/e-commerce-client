import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Bag } from "../../assets/images/bx-cart-add.svg";
import { ReactComponent as Bin } from "../../assets/images/bin.svg";
import SizeBox from "../sizebox/SizeBox";
import {
  Image,
  ItemContainer,
  ItemDescription,
  Overlay,
  OverlayContainer,
  QuantitiyContainer,
  InnerContainer,
  StyledPlus,
  StyledMinus,
} from "./CardStyle";

export default function Card({
  product,
  setModalIsOpen,
  size,
  setProductId,
  bagProductId,
}) {
  const [sizeBoxIsOpen, setSizeBoxIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <ItemContainer
      onClick={() => {
        navigate(`/shop/${product.id}`);
      }}
    >
      <Image src={product?.image} alt="" />
      <ItemDescription>
        <p>{product?.name.toUpperCase()}</p>
        <p>{product?.price} BAM</p>
      </ItemDescription>
      {isLoggedIn && (
        <Overlay onClick={(e) => e.stopPropagation()}>
          <OverlayContainer
            isMyShop={location.pathname === "/my-shop" ? true : false}
          >
            {location.pathname === "/my-shop" ? (
              <>
                <h1>{size}</h1>
                <InnerContainer>
                  <QuantitiyContainer>
                    <StyledPlus />
                    <StyledMinus />
                  </QuantitiyContainer>
                  <p>0</p>
                  <Bin
                    style={{ width: "24px", height: "24px" }}
                    onClick={() => {
                      setModalIsOpen(true);
                      setProductId(bagProductId);
                    }}
                  />
                </InnerContainer>
              </>
            ) : (
              <Bag
                onClick={() => {
                  setSizeBoxIsOpen(!sizeBoxIsOpen);
                }}
              />
            )}
          </OverlayContainer>
          {sizeBoxIsOpen && (
            <SizeBox
              setSizeBoxIsOpen={setSizeBoxIsOpen}
              productId={product.id}
            />
          )}
        </Overlay>
      )}
    </ItemContainer>
  );
}
