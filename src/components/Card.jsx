import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setStorage} from "../redux/slices/cardSlice";



const Card = ({id, taste, name, price, charge, image, slug, elfbar}) => {

    const dispatch = useDispatch()


    function addToLocalStorage() {
        dispatch(setStorage(elfbar))
        console.log(JSON.parse(localStorage.getItem("elfbars")))
    }

    return (
        <div className="col-3">
            <div className="card" style={{width: 300}}>
                <div className="d-flex fav">
                    <button className="fav-button"><i className="fa-solid fa-heart"></i></button>
                </div>
                <Link to={`elfbar/${slug}/${charge}`}>
                    <img src={image} className="card-img-top" alt="..."/>
                </Link>
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <div className="category">
                        <p>Elfbar {charge.name}</p>
                    </div>
                    <div className="item-cart d-flex justify-content-between">
                        <p className="item-price">{price} uah</p>
                        <button className="button-cart" onClick={addToLocalStorage}>
                            <div className="cart-container"><i className="fa-solid fa-cart-shopping"></i></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;