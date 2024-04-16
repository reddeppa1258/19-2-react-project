import react from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";
import { useSelector } from 'react-redux';
 


const Header=()=>{
    const total=useSelector(state=>state.cart.total);
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        <img src='https://www.achieversit.com/assets/images/logo-white.png' style={{height:'50px',width:'90px'}} alt=''/>
                    </a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/Home' class="nav-link active" >Home</Link>
                        </li>
                       
                       
                        <li class="nav-item">
                            <Link to='/shop' class="nav-link active" aria-current="page" href="#">shop</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/Cart' class="nav-link active"  >cart</Link>
                            </li>

                            
                                        <li class="nav-item">
                            <Link  to='/Cart' class="nav-link active" aria-current="page" href="#"><BiSolidCart /></Link>
                            <span className='cart-count'></span>
                        </li>
                                    
                        
                            
                          
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page"
                            
                            ><FaUser /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header