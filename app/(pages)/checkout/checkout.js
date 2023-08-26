"use client"

import CheckoutCard from "app/app/components/CheckoutCard/CheckoutCard";
import { resetItemsState, selectProductsState } from "app/app/redux/Features/products/productsSlice";
import { updateData } from "app/app/utils/services";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Checkout () {
  const dispatch = useDispatch();
  const [summary, setSummary] = useState({
    total: 0,
    amount: 0
  })

  const productsState = useSelector(selectProductsState);

  const handleClickTrash = () => {
    dispatch(resetItemsState());
  }

  const handleClickCheckout = () => {
    updateData(productsState).then(res => {
      alert(res.message)
      dispatch(resetItemsState());
    })
  }

  useEffect(() => {
    const totalResult = productsState.reduce((acc, current) => {
      return acc + current.price;
    },0);
    const amountResult = productsState.reduce((acc, current) => {
      return acc + current.amount;
    },0);
    setSummary({
      total: totalResult,
      amount: amountResult
    });
  },[productsState])

  return(
    <div className="checkout_content">
      <div className="checkout-list">
        <div className="title_content">
          <p className="title">Productos</p>
          <button aria-label="trash" onClick={handleClickTrash}>
            <Image src="/icons/trash.svg" alt="add" width="30" height="30"/>
          </button>
        </div>
        {productsState.map((item, index)=>(
          <CheckoutCard key={`product-${index}`} item={item}/>
        ))}
      </div>
      <div className="summary">
        <p className="title">Resumen de compra</p>
        <div className="summary_info">
          <p>Articulos comprados:</p>
          <p>{summary.amount}</p>
        </div>
        <div className="summary_info">
          <p>Total:</p>
          <p>${summary.total}</p>
        </div>
        <button disabled={productsState.length === 0} aria-label="checkout" onClick={handleClickCheckout}>
          Comprar
        </button>
      </div>
    </div>
  )
}

export default Checkout;