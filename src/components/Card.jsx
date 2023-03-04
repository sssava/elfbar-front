import React from 'react';
import pink from "../images/odnorazovye-podelf-bar-1500-pink-lemonade-81061751468247.jpg";

const Card = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{width: 300}}>
                            <div className="d-flex fav">
                                <button className="fav-button"><i className="fa-solid fa-heart"></i></button>
                            </div>
                            <img src={pink} className="card-img-top"
                                 alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Одноразова под система Elfbar Pink Lemonade 1500</p>
                                <div className="category">
                                    <p>Elfbar 1500</p>
                                </div>
                                <div className="item-cart d-flex justify-content-between">
                                    <p className="item-price">400 uah</p>
                                    <button className="button-cart">
                                        <div className="cart-container"><i className="fa-solid fa-cart-shopping"></i></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: 300}}>
                            <div className="d-flex fav">
                                <button className="fav-button"><i className="fa-solid fa-heart"></i></button>
                            </div>
                            <img src="./elf-bar-1500-blue-razz-lemonade-74478454886387.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Одноразова под система Elfbar Blue Razz 1500</p>
                                <div className="category">
                                    <p>Elfbar 1500</p>
                                </div>
                                <div className="item-cart d-flex justify-content-between">
                                    <p className="item-price">400 uah</p>
                                    <button className="button-cart">
                                        <div className="cart-container"><i className="fa-solid fa-cart-shopping"></i></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: 300}}>
                            <div className="d-flex fav">
                                <button className="fav-button"><i className="fa-solid fa-heart"></i></button>
                            </div>
                            <img src="./elf-bar-bc-4000-tyag-avocado-cream.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Одноразова под система Elfbar Avocado Cream BC 5000</p>
                                <div className="category">
                                    <p>Elfbar BC500</p>
                                </div>
                                <div className="item-cart d-flex justify-content-between">
                                    <p className="item-price">400 uah</p>
                                    <button className="button-cart">
                                        <div className="cart-container"><i className="fa-solid fa-cart-shopping"></i></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: 300}}>

                            <img src="./elf-bar-bc-4000-tyag-avocado-cream.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Одноразова под система Elfbar Avocado Cream BC 5000</p>
                                <div className="category">
                                    <p>Elfbar BC500</p>
                                </div>
                                <div className="item-cart d-flex justify-content-between">
                                    <p className="item-price">400 uah</p>
                                    <button className="button-cart">
                                        <div className="cart-container"><i className="fa-solid fa-cart-shopping"></i></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;