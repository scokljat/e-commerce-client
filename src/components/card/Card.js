import { useState } from "react";
import { ReactComponent as Bag } from "../../assets/images/bx-cart-add.svg";
import SizeBox from "../sizebox/SizeBox";
import { Image, ItemContainer, ItemDescription, Overlay } from "./CardStyle";

export default function Card({ product }) {
  const [sizeBoxIsOpen, setSizeBoxIsOpen] = useState(false);

  return (
    <ItemContainer>
      <Image src={product?.image} alt="" />
      <ItemDescription>
        <p>{product?.name.toUpperCase()}</p>
        <p>{product?.price} BAM</p>
      </ItemDescription>
      <Overlay>
        <Bag onClick={() => setSizeBoxIsOpen(!sizeBoxIsOpen)} />
        {sizeBoxIsOpen && <SizeBox setSizeBoxIsOpen={setSizeBoxIsOpen} />}
      </Overlay>
    </ItemContainer>
  );
}
