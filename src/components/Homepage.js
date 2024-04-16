import React from "react"
import sofaSlide from './Assets/Images/hero-img.png'
import { BsCarFrontFill } from "react-icons/bs";
import { BsFillWalletFill } from "react-icons/bs";
import { AiFillSecurityScan } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
import Carousel from "./HomeComponents/Carousel";



const Homepage = () => {
    const banner = [{
        image: sofaSlide,
        brand: 'products',
        discount: '50% Off For your First Order',
        discount1: 'Any quality sofa needs a well-made frame that will allow it to maintain its overall shape and integrity. The frame is the skeleton that keeps every part of the sofa together, and for that reason it is incredibly important that it is strong and robust — able to stand up to everyday use without compromising on comfort',
        button: 'visit collections'
    }];

    const card = [
        {
            icon: <BsCarFrontFill />,
            heading: 'Free shipping',
            about: 'Lorem ipsum dolor sit amet',
            Addcolor:'red',
            
        },
        {
            icon: <BsFillWalletFill />,
            heading: 'safe payment',
            about: 'Lorem ipsum dolor sit amet',
            Addcolor:'blue',
        },
         {   icon: <AiFillSecurityScan />,
            heading: 'secure payment',
            about: 'Lorem ipsum dolor sit amet',
            Addcolor:'pink',
    },
           


    ];
    const slides = [
        {
          image: 'product1.jpg',
          title: 'Product 1',
          description: 'This is the first product',
        },
        {
          image: 'product2.jpg',
          title: 'Product 2',
          description: 'This is the second product',
        },
        // Add more slides as needed
      ];
    
   
    
    return (
        <div>
            <h2>Home Page</h2>
            <div>
                <div className="container">
                    {
                        banner && banner.length > 0 ?

                            (
                                banner.map((item) => (

                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1>{item.discount}</h1>
                                            <p>{item.discount1}</p>
                                            <button>{item.button}</button>

                                        </div>
                                        <div className="col-md-6">
                                            <img src={sofaSlide} />

                                        </div>

                                    </div>
                                ))
                            )


                            : <p>loading</p>
                    }

                </div>
            </div>
            <div className="container">
                <div className="row"> 
                    {
                        card.map((card)=>{
                            return(
                             
                            <div className="col-md-3">
                                <h1>{card.icon}</h1>
                                <h1>{card.heading}</h1>
                                <p>{card.about}</p>
                              
                                
                                </div>
                                
                            )
                                 
                        })
                    }
                    
                </div>
                

            </div>
            <div className="products-page">
      <h2>Our Products</h2>
      <Carousel slides={slides} />
      {/* Rest of the products page content */}
    </div>






        </div>

    )
}
export default Homepage