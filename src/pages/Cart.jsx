import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPlusQuan, removeFromStorage, clearStorage, setMinusQuan, setQuan} from "../redux/slices/cardSlice";
import CartItem from "../components/CartItem";
import {selectCardData} from "../redux/slices/cardSlice";
import {cartData} from "../redux/slices/cartSlice";
import {setName, setSurname, setPostal_Code} from "../redux/slices/cartSlice";
import axios from "axios";
import empty from "../images/empty-cart.png"
import {Link} from "react-router-dom";
import OrderCreated from "../components/OrderCreated";

const Cart = () => {

    const dispatch = useDispatch()
    const {storage, items} = useSelector(selectCardData)
    const {name, surname, postal_code} = useSelector(cartData)
    const [success, setSuccess] = useState(false)


    const total = storage.reduce((total, current) => total + current.quantity * current.price, 0)
    const totalCartItems = storage.reduce((total, count) => total + count.quantity, 0)


    const onPlusQuantity = (id) => {
        const action = {
            payload: {
                itemId: id,
            }
        }

        dispatch(setPlusQuan(action))
    }

    const onMinusQuan = (id) => {
        const action = {
            payload: {
                itemId: id,
            }
        }

        dispatch(setMinusQuan(action))
    }

    const onSetQuan = (id, newQuan) => {
        const action = {
            payload: {
                itemId: id,
                newQuan: newQuan,
            }
        }

        dispatch(setQuan(action))
    }

    const removeItem = (id) => {
        dispatch(removeFromStorage(id))
    }

    const nameSetter = (event) => {
        dispatch(setName(event.target.value))
    }

    const surnameSetter = (event) => {
        dispatch(setSurname(event.target.value))
    }

    const postal_codeSetter = (event) => {
        dispatch(setPostal_Code(event.target.value))
    }

    const createOrder = async (event) => {
        const order = {
            "name": name,
            "surname": surname,
            "postal_code": parseInt(postal_code),
            "order_items": storage.map((item) => {
                return(
                    {
                        "elfbar": item.id,
                        "quantity": item.quantity
                    }
                )
            })
        }
        console.log(order)

        function Exeption(message){
            this.message = message
        }

        try {
            for(let item in items){
                for(let obj in storage){
                    if(items[item].id === storage[obj].id){
                        console.log(storage[obj].quantity, items[item].taste.count_in_stock)
                        if(storage[obj].quantity > items[item].taste.count_in_stock){
                            alert("wrong count")
                            throw Exeption("wrong count of elfbar, count in stock not enough");
                            break;
                        }
                    }
                }
            }
            localStorage.clear()
            dispatch(clearStorage([]))
            const {data} = await axios.post("http://127.0.0.1:8000/api/create_order/", order)
            setSuccess(true)
            dispatch(setName(""))
            dispatch(setSurname(""))
            dispatch(setPostal_Code(""))
            console.log(data)
        } catch (error){
            console.log(error)
        }
    }


    return (
        <div>
            {success ?
                <OrderCreated /> :
                <div className="cart">
                    <h1>Shopping Cart</h1>

                    {totalCartItems > 0 ? <div className="shopping-cart">

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
                                    <CartItem item={item} onPlusQuantity={onPlusQuantity} removeItem={removeItem} onMinusQuan={onMinusQuan} onSetQuan={onSetQuan}/>
                                )
                            })}

                            <form onSubmit={createOrder} action="/cart">
                                <div className="bottom_cart">
                                    <div className="shipping">
                                        <div className="shipping_info">
                                            <label>Name</label>
                                            <input onChange={nameSetter} placeholder="name..." type="text" value={name} required={true}/>
                                        </div>
                                        <div className="shipping_info">
                                            <label>Surname</label>
                                            <input placeholder="surname..." type="text" value={surname} onChange={surnameSetter} required={true}/>
                                        </div>
                                        <div className="shipping_info">
                                            <label>Postal Code</label>
                                            <input placeholder="postal code..." type="number" value={postal_code} onChange={postal_codeSetter} required={true}/>
                                        </div>
                                    </div>
                                    <div className="totals">
                                        <div className="totals-item">
                                            <label>Count Items</label>
                                            <div className="totals-value" id="cart-subtotal">{totalCartItems}</div>
                                        </div>
                                        <div className="totals-item">
                                            <label>Shipping</label>
                                            <div className="totals-value" id="cart-shipping">Free</div>
                                        </div>
                                        <div className="totals-item totals-item-total">
                                            <label>Grand Total</label>
                                            <div className="totals-value" id="cart-total">{total} UAH</div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="checkout">Checkout</button>
                            </form>

                        </div> :
                        <div className="empty_cart">
                            <h2>Your Cart is empty now</h2>
                            <h5>Add some products to create an order</h5>
                            <img className="empty_img" src={empty} alt="empty"/>
                            <Link to="/"><button>Go back</button></Link>
                        </div>
                    }
                </div>
            }
        </div>

    );
};

export default Cart;