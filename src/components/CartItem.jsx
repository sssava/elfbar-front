import React, {useEffect, useState} from 'react';

const CartItem = ({item, onChangeQuantity, removeItem}) => {
    const [quantity, setQuantity] = useState(item.quantity)

    const changeQuantity = (event) => {
        const newQuantity = event.target.value
        setQuantity(newQuantity)
        onChangeQuantity(item.id, newQuantity)
    }

    const deleteItem = (id) => {
        removeItem(item.id)
    }

    return (
        <div className="product">
            <div className="product-image">
                <img src={item.image}/>
            </div>
            <div className="product-details">
                <div className="product-title">{item.name}</div>
                <p className="product-description">{item.description.slice(0, 250)}...</p>
            </div>
            <div className="product-price">{item.price}</div>
            <div className="product-quantity">
                <input onChange={changeQuantity} type="number" value={quantity} min="1"/>
            </div>
            <div className="product-removal">
                <button onClick={deleteItem} className="remove-product">
                    Remove
                </button>
            </div>
            <div className="product-line-price">{item.quantity * item.price}</div>
        </div>
    );
};

export default CartItem;