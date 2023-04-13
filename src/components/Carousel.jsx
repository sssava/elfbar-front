import React from 'react';
import elf1 from "../images/elfbarpreview1.jpg";
import elf from "../images/elfbar-preview.png";

const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide mt-5 mb-4">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={elf1} className="d-block w-100" alt="elf"/>
                    </div>
                    <div className="carousel-item">
                        <img src={elf} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;