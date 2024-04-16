
import React from "react"
import { BsFillHandbagFill } from "react-icons/bs";
import Foot from './Stylings/Foot.module.css'



const Footer = () => {
    return (
        <div>
            <div className={Foot.card}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>
                                <BsFillHandbagFill /> MART
                            </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <div className="col-md-3">
                            <h1 > About Us</h1>
                            <ul className={Foot.pet} >
                                <li>
                                    <a  >Carrers</a>
                                </li>
                                <li>
                                    <a >Our Stores</a>
                                </li>
                                <li>
                                    <a  >Our Cares</a>
                                </li>
                                <li>
                                    <a  >Terms & Conditions</a>
                                </li>
                                <li>
                                    <a  > Private Policy</a>
                                </li>
                            </ul>


                        </div>
                        <div className="col-md-3">
                            <h1>Customer Care</h1>
                            <ul className={Foot.pet}> 
                                <li className={Foot.pet}>
                                    <a >Help Center</a>
                                </li>
                                <li>
                                    <a >How to Buy</a>
                                </li>
                                <li>
                                    <a >Track your Order</a>
                                </li>
                                <li>
                                    <a >Corporate & Bulk purchasing</a>
                                </li>
                                <li>
                                    <a >Returns and Refunds</a>
                                </li>

                            </ul>

                        </div>
                        <div className=" col-md-3">
                            <h1>Contact Us</h1>
                            <ul className={Foot.pet}>
                                <li>
                                    <a >70 washington square south,new york, 10012,united states</a>
                                </li>
                                <li>
                                    <a >Email:example@gmail.com</a>
                                </li>
                                <li>
                                    <a >phone:+11123456780</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer