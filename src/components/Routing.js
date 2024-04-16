import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from './Stores/Cart'
import Homepage from "./Homepage";
import Product from "./HomeComponents/product";

const Rounting=()=>{
    return(
        <div>
            <Routes>
            <Route path='/' element={<Home />} />

                <Route path='home' element={<Home />} />
                <Route path='Shop' element={<Shop />} />
                <Route path='Cart' element={<Cart />} />
                <Route path='/Product/:id' element={< Product/>} />
                
            </Routes>
        </div>
    )
}
export default Rounting