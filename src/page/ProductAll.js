import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async ()=>{
    let url = 'https://my-json-server.typicode.com/Jseungwoo/adererror-react/products';
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
      <ProductCard productList={productList}/>
    </div>
  )
}

export default ProductAll
