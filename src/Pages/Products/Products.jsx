import React from 'react';
import { useState , useEffect } from 'react';
import Categories from '../../Components/Categories/Categories';
import Items from '../../Components/ProductItems/Items';

const Products = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
   const responce = await fetch("https://fakestoreapi.com/products")
   const data = await responce.json()
      console.log(data)
      setProducts(data)
  };

  useEffect(() => {
    getProducts();
  } , []);
  

  return (
    <div>
      <Categories/>
      <div className="flex flex-col text-center w-full mt-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-blue-600">
          ALL PRODUCTS
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           You may definetly like this
        </p>
      </div>
      {
        products.length > 0 ? <Items Products={products} /> : <div>Loading.....</div>
      }
    </div>
  )
}

export default Products;
