import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setNewQuan, removeFromStorage} from "../redux/slices/cardSlice";
import CartItem from "../components/CartItem";
import {selectCardData} from "../redux/slices/cardSlice";

const Cart = () => {

    const dispatch = useDispatch()
    const {storage} = useSelector(selectCardData)

    const total = storage.reduce((total, current) => total + current.quantity * current.price, 0)


    const onChangeQuantity = (id, newQuan) => {
        const action = {
            payload: {
                itemId: id,
                newQuan: newQuan,
            }
        }

        dispatch(setNewQuan(action))
        console.log(storage)
    }

    const removeItem = (id) => {
        dispatch(removeFromStorage(id))
    }

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>

            <div className="shopping-cart">

                <div className="column-labels">
                    <label className="product-image">Image</label>
                    <label className="product-details">Product</label>
                    <label className="product-price">Price</label>
                    <label className="product-quantity">Quantity</label>
                    <label className="product-removal">Remove</label>
                    <label className="product-line-price">Total</label>
                </div>

                {storage.map((item) => {
                    return(
                        <CartItem item={item} onChangeQuantity={onChangeQuantity} removeItem={removeItem}/>
                    )
                })}


                <div className="totals">
                    <div className="totals-item">
                        <label>Subtotal</label>
                        <div className="totals-value" id="cart-subtotal">71.97</div>
                    </div>
                    <div className="totals-item">
                        <label>Tax (5%)</label>
                        <div className="totals-value" id="cart-tax">3.60</div>
                    </div>
                    <div className="totals-item">
                        <label>Shipping</label>
                        <div className="totals-value" id="cart-shipping">15.00</div>
                    </div>
                    <div className="totals-item totals-item-total">
                        <label>Grand Total</label>
                        <div className="totals-value" id="cart-total">{total}</div>
                    </div>
                </div>

                <button className="checkout">Checkout</button>

            </div>
        </div>
    );
};

export default Cart;