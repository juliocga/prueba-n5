"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { saveData } from "app/app/utils/services";

function AddItem() {
  const [inputs, setInputs] = useState({});
  const [disabled, setDisabled] = useState(true);


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClick = () => {
    const item = {...inputs,
      amount: Number(inputs.amount), 
      price: Number(inputs.price)
    }
    saveData(item).then(res => {
      alert(res.message);
    });
  }

  useEffect(() => {
    if (inputs?.name && inputs?.price && inputs?.amount > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  },[inputs]);

  return (
    <div className="item-form-content">
    <div className="info-content">
      <Image className="product_img" src={"/icons/foto.svg"} alt="sin foto" width="280" height="210"/>
      <div className="item-form">
        <label htmlFor="name">Nombre del producto</label>
        <input type="text" id="name" name="name" size="15" onChange={handleChange} />
        <label htmlFor="price" >Precio</label>
        <input type="number" id="price" name="price" size="15" onChange={handleChange}/>
        <label htmlFor="amount">Cantidad</label>
        <input type="number" id="amount" name="amount" size="15" onChange={handleChange}/>
      </div>
    </div>
      <button disabled={disabled} aria-label="add-product" onClick={handleClick}>
        Agregar producto
      </button>
    </div>
  )
}

export default AddItem;