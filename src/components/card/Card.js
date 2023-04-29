import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Bag } from "../../assets/images/bx-cart-add.svg";
import { ReactComponent as Bin } from "../../assets/images/bin.svg";
import SizeBox from "../sizebox/SizeBox";
import {
  increaseUserProduct,
  decreaseUserProduct,
} from "../../store/products/productSlice";
import { getUserById } from "../../store/user/userSlice";
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
  quantity,
}) {
  const [sizeBoxIsOpen, setSizeBoxIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);

  return (
    <ItemContainer
      onClick={() => {
        navigate(`/shop/${product.id}`);
      }}
    >
      <Image src={product?.image} alt="" />
      <ItemDescription>
        <p>{product?.name.toUpperCase()}</p>
        {location.pathname === "/my-shop" ? (
          <p>
            {quantity} x {product?.price} BAM
          </p>
        ) : (
          <p>{product?.price} BAM</p>
        )}
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
                    <StyledPlus
                      onClick={() => {
                        dispatch(
                          increaseUserProduct({
                            userId: user.id,
                            productId: product.id,
                            size: size,
                          })
                        ).then(() => dispatch(getUserById(user.id)));
                      }}
                    />
                    {quantity > 1 && (
                      <StyledMinus
                        onClick={() =>
                          dispatch(
                            decreaseUserProduct({
                              userId: user.id,
                              productId: product.id,
                              size: size,
                            })
                          )
                        }
                      />
                    )}
                  </QuantitiyContainer>
                  <p>{quantity}</p>
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
