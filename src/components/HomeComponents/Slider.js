import React, { useState } from "react";
import { SliderData } from "../Assets/products";
import Hoestyle from '../Stylings/Hoestyle.module.css'






const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevSlide = () => {
        const newIndex = (activeIndex === 0) ? SliderData.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
    };
    const handleNextSlide = () => {
        const newIndex = (activeIndex === SliderData.length - 1) ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };
    return (
        <div>
            <div >
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {SliderData.map((item, index) => (
                            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                                <div className='backgroundSliderData'>
                                    <div className="row">
                                        <div className="col-md-6" >
                                      
                                                <h2 className='slidertitle'>{item.title}</h2>
                                                <p className='sliderdesc'>{item.desc}</p>
                                                <button className='sliderbtn'>Visit Collection</button>
                                           

                                        </div>
                                        


                                        <div className="col-md-6">
                                            <img src={item.cover} className="d-block w-100 simg" alt={item.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrevSlide}
                        style={{ color: "black" }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNextSlide}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>


    )
}
export default Slider