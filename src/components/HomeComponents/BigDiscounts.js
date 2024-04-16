
import React, { useState } from "react";
import { discoutProducts } from "../Assets/products";
import '../Stylings/Big.css'
import { RiStarSFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { products } from "../Assets/products";
import { useDispatch } from "react-redux";
import { add } from "../Stores/Cartslice";
import { ToastContainer, toast } from 'react-toastify';


const BigDiscounts = () => {
    const { id } = useParams();
    const Big = products.find((item) => item.id === id);
    const [data, setData] = useState(false)

    const dispatch = useDispatch();
    const addtocart = (item) => {
        dispatch(add(item))
        setData(true)
        toast.success('product has been added to cart')
    }

    return (
        <div className="background" >

            <h1>Big Discounts</h1>
            <div className="container">
                <div className="row">
                    {

                        discoutProducts.map((item, index) => (

                            <div className="col-md-4 mb-3 ">
                                <div>
                                    <div className="card cardbody"  >
                                        <Link className='link' to={`/Product/${item.id}`}>


                                            <button className="butto">{item.discount}</button>
                                            <img src={item.imgUrl} alt={item.title} className="bigimg" />
                                            <h4>{item.productName}</h4>
                                            <p>{item.subtitle}</p>
                                            <h4 > {
                                                [...Array(5)].map(star => {
                                                    return <RiStarSFill size={30} className="fivestar" />
                                                })
                                            }</h4>
                                        </Link>

                                        <div className='comntainer'>
                                            <div className="row">
                                                <div className="col-md-6 mt-2">
                                                <p>${item.price}</p> 
                                                </div>
                                                <div className="col-md-6">
                                                <button className="onclick1 mb-5"  onClick={() => { addtocart(item) }} >+</button>
                                                </div>

                                            </div>
                                             
                                            
                                         </div> 








                                    </div>
                                </div>

                            </div>


                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default BigDiscounts