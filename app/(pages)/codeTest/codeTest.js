'use client'

import { useEffect, useState } from "react";
import ProductCard from "app/app/components/ProductCard/ProductCard";
import { fetchData } from "app/app/utils/services";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsState, setAddItemsState } from "app/app/redux/Features/products/productsSlice";

function CodeTest () {

  const [data, setData] = useState([]);
  const productsState = useSelector(selectProductsState);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchData().then(res => setData(res));
  },[])

  const addProducts = (item, amount) => {
    const product = {...item, amount};
    const result = productsState.some((product) => product.id === item.id)
    if(!result) dispatch(setAddItemsState(product))
  }

  return (
    <div className="producst_list">
      {data.length > 0 ?
        data.map((item, index)=>(
          <ProductCard key={`product-${index}`} item={item} onClick={addProducts}/>
        ))
        : (
          <p>...cargando</p>
        )
      }
    </div>
  )
}

export default CodeTest;