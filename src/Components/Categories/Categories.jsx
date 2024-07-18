import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {

    const [categories, setCategory] = useState();

  const sawCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    console.log(data);
    setCategory(data);
  };

  useEffect(() => {
    sawCategories();
  } , []);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="w-1000">
            <div class="mb-10 flex gap-3">
              
              {categories &&  categories.map((category , key)=>{
                return(
                    <Link to={`/categories/${category}`} key={key} class=" flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 ">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-blue-800 text-lg title-font font-medium mb-3 capitalize">
                    {category}
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-blue-500 hover:text-black inline-flex items-center">
                    Explore
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </Link>
                )
              })}
        
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
