import React, { useState } from "react";
import { discoutProducts, products } from "../Assets/products";
import { Link, useParams } from "react-router-dom"
import { add } from "../Stores/Cartslice"
import { useDispatch } from "react-redux";
import { RiStarSFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import  '../Stylings/Product.css'




const Product = () => {
    const [addtocart, setAddtocart] = useState(false)
    
    const dispatch = useDispatch()
    const { id } = useParams();
    const productdetails = products.find((item) => item.id === id);
    const similarProducts = products.filter((item) => item.category === productdetails.category && item.id !== productdetails.id);
    console.log(id)
    const handleAddToCart = (productdetails) => {
        dispatch(add(productdetails));
        setAddtocart(true);
        toast.success('product  added to cart')

    };
    


    return (
        <div>
            <div className='productimg'>
        <h1 className="productname">{productdetails.productName}</h1>

      </div>
            
            <div className="container  " >
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src={productdetails.imgUrl} alt={productdetails.price} className="img"  />

                    </div>
                    <div className="col-md-6">
                        <h1>{productdetails.productName}</h1>

                        <h6>{[...Array(5)].map(star => {
                            return <RiStarSFill size={30} className="fivestar" />
                        })
                        } {productdetails.avgRating}ratings</h6>

                        <span>
                            <h3>${productdetails.price}</h3> <span>category: {productdetails.category}</span>
                        </span>

                        <p>{productdetails.shortDesc}</p>
                        <button className="btn1">1</button><br></br>
                        <button className="btn2"
                            onClick={() => { handleAddToCart(productdetails) }}
                        >{addtocart ? 'Added' : "Add to cart"}</button>


                    </div>


                </div>
                <div className="desc">
                    <h4 >Description </h4><p>  Reviews(1) </p>
                    <p>{productdetails.description}</p>
                </div>

            </div>
            <div className="container">
            <div className="row">
          {similarProducts.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card cardbody" >
                <Link  to={`/Product/${item.id}`}>
                  <img src={item.imgUrl} alt={item.title} className="bimg" />
                  <h4>{item.productName}</h4>
                  <h4>
                    {[...Array(5)].map((star, index) => (
                      <RiStarSFill key={index} size={30} className="fivestar" />
                    ))}
                  </h4>
                  </Link>
                   <h4 >${item.price} <button className="button" onClick={() => { handleAddToCart(productdetails) }} >+</button></h4> 
               
              </div>
            </div>
          ))}
        </div>
            </div>

        </div>
    )
}
export default Product