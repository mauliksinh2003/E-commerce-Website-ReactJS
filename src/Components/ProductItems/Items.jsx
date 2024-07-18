import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Items = ({Products} = []) => {

  const navigate = useNavigate();

  function gotoProduct(){
    navigate("/product/:id");
  }
  
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {
              Products.map((product)=>{
                const {id, title, image, price, description, category} = product;
                return(

<Link to={`/product/${id}`} onClick={gotoProduct} className="lg:w-1/3 md:w-1/2 p-4 w-full pb-7 border border-x-3 cursor-pointer hover:bg-gray-100">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {title}
                </h2>
                <p className="mt-1 text-xl font-bold text-red-800">{price}$</p>
              </div>
            </Link>
                )
              })
            }

            
  
          </div>
        </div>
      </section>
    </div>
  )
}

export default Items;
