import React,{useState , useEffect} from "react";
import Hero from "../../Components/Hero/Hero";
import Items from "../../Components/ProductItems/Items";
import Feature from "../../Components/FeatureCard/Feature";
import Stats from "../../Components/Stats/Stats";
import Footer from "../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";



function Home() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
   const responce = await fetch("https://fakestoreapi.com/products?limit=12")
   const data = await responce.json()
      console.log(data)
      setProducts(data)
  };

  useEffect(() => {
    getProducts();
  } , []);
  

  return (
    <div>
      <Hero />
      <div className="flex flex-col text-center w-full mt-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-blue-600">
          PRODUCTS
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Some popular product , You may like.
        </p>
      </div>
      {
        products.length > 0 ? <Items Products={products} /> : <div>Loading.....</div>
      }

<h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-0  text-blue-600">
          CATEGORIES PRODUCTS
        </h1>

      <Categories/>
      <Feature />
    </div>
  );
}

export default Home;
