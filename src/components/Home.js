import React, { useState } from "react";
import Slider from "./HomeComponents/Slider";
import Card from "./HomeComponents/Card";
import BigDiscounts from "./HomeComponents/BigDiscounts";
import NewArrivals from "./HomeComponents/NewArrivals";
import Bestsales from "./HomeComponents/Bestsales";
import Product from "./HomeComponents/product";
import './Stylings/Home.css'





const Home = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleClick = (product) => {
  //   setSelectedProduct(product);
  // };
  return (
    <div>
      
      <Slider />
      <Card />
      < BigDiscounts />
      <NewArrivals />
      < Bestsales />
    </div>
  )
}
export default Home