import Image from "next/image";

function CheckoutCard({item}) {
  return(
    <div className="checkout_card">
      <Image className="product_img" src={"/icons/foto.svg"} alt="sin foto" width="80" height="60"/>
      <p data-cy="name">{item?.name}</p>
      <p data-cy="price">${item?.price}</p>
      <p data-cy="amount">x {item?.amount}</p>
      <p data-cy="total">${item?.amount * item?.price}</p>
    </div>
  )
}

export default CheckoutCard;