import Image from "next/image";
import { useState } from "react";

function ProductCard ({
  item,
  onClick
}) {
  const [amount, setAmount] = useState(1);

  const handleClick = (operation) => {
    if (operation === "add" && amount < item.amount) setAmount(amount + 1); 
    if (operation === "less" && amount > 1) setAmount(amount - 1);
  }

  return(
    <div className="product_card">
      <Image className="product_img" src={"/icons/foto.svg"} alt="sin foto" width="150" height="110"/>
      <p className="name_product">{item.name}</p>
      <p data-cy="price">${item.price}</p>
      <div className="amount_buttons">
        <button data-cy="less" className="circle_button" onClick={() => handleClick("less")}>
          <Image src="/icons/less-circle.svg" alt="add" width="30" height="30"/>
        </button>
        <p className="amount">{amount}</p>
        <button data-cy="add" className="circle_button" onClick={() => handleClick("add")}>
          <Image src="/icons/add-circle.svg" alt="less" width="30" height="30"/>
        </button>
      </div>
      <p className="store">Disponibles: {item.amount}</p>
      <button disabled={item.amount === 0} className="add_button" onClick={() => onClick(item, amount)}>
        Agregar
      </button>
    </div>
  )
}

export default ProductCard;