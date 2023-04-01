import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setStorage} from "../redux/slices/cardSlice";
import {selectCardData} from "../redux/slices/cardSlice";


const Card = ({id, taste, name, price, charge, image, slug, elfbar}) => {

    const dispatch = useDispatch()
    const {storage} = useSelector(selectCardData)

    const checkElfInCart = storage.find((obj) => obj.id === id)


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
                        {taste.count_in_stock > 0 ?
                            <button disabled={checkElfInCart ? true : false} className="button-cart" onClick={addToLocalStorage}>
                                <div className={checkElfInCart ? "cart-container__in__cart" : "cart-container"}>{checkElfInCart ?
                                    <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-cart-shopping"></i>}</div>
                            </button> :
                            <button disabled={true} className="button-cart" onClick={addToLocalStorage}>
                                <div className="cart-container__not_in_stock"><p>not in stock</p></div>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;