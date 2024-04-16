import React, { useState } from "react";
import { products } from "../Assets/products";
import { RiStarSFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Stores/Cartslice";
import { ToastContainer, toast } from 'react-toastify';






const Bestsales = () => {

    const filteredProducts = products.filter(product => product.category === 'sofa');
    console.log(filteredProducts)
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
        <div className="bestbackground">
            <h2>Best sales</h2>
            <div>
                <div className=" container">
                    <div className="row">
                        {
                            filteredProducts.map((item, index) => (
                                <div className="col-md-4 mb-3" >
                                    <div>
                                        <div className="card cardbody2"   >
                                            <Link to={`/Product/${item.id}`}>
                                                <img src={item.imgUrl} alt={item.title} className="bstimg" />
                                                <h4 >{item.productName}</h4>

                                                <h4  > {
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
        </div>
    )
}
export default Bestsales