import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Items from '../ProductItems/Items';

const CategoryProduct = () => {

    const [category, setCategory] = useState([]);
    const { name } = useParams();

  const getProducts = async () => {
   const responce = await fetch(`https://fakestoreapi.com/products/category/${name}`)
   const data = await responce.json()
      console.log(data)
      setCategory(data)
  };

  useEffect(() => {
    getProducts();
  } , []);
  

  return (
    <div>
      <Items Products={category}/>
    </div>
  )
}

export default CategoryProduct;
