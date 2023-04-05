import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Bag } from "../../assets/images/bx-cart-add.svg";
import { ReactComponent as Bin } from "../../assets/images/bin.svg";
import SizeBox from "../sizebox/SizeBox";
import {
  Image,
  ItemContainer,
  ItemDescription,
  Overlay,
  OverlayContainer,
} from "./CardStyle";

export default function Card({ product, setModalIsOpen, size }) {
  const [sizeBoxIsOpen, setSizeBoxIsOpen] = useState(false);
  const location = useLocation();

  return (
    <ItemContainer>
      <Image src={product?.image} alt="" />
      <ItemDescription>
        <p>{product?.name.toUpperCase()}</p>
        <p>{product?.price} BAM</p>
      </ItemDescription>

      <Overlay>
        <OverlayContainer
          isMyShop={location.pathname === "/my-shop" ? true : false}
        >
          {location.pathname === "/my-shop" ? (
            <>
              <p>Size {size}</p>
              <Bin
                style={{ width: "24px", height: "24px" }}
                onClick={() => setModalIsOpen(true)}
              />
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
          <SizeBox setSizeBoxIsOpen={setSizeBoxIsOpen} productId={product.id} />
        )}
      </Overlay>
    </ItemContainer>
  );
}
