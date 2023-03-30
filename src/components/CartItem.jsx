import React, {useState} from 'react';

const CartItem = ({item, onPlusQuantity, removeItem, onMinusQuan, onSetQuan}) => {
    const [quantity, setQuantity] = useState(item.quantity)

    const plusQuantity = (event) => {
        if(event.key === "ArrowUp"){
            setQuantity(prev => prev += 1)
            onPlusQuantity(item.id)
        }
    }

    const minusQuan = (event) => {
        if(event.key === "ArrowDown"){
            setQuantity(prev => prev -= 1)
            onMinusQuan(item.id)
        }
    }

    const addQuan = (event) => {
        const newQuan = event.target.value
        setQuantity(event.target.value)
        onSetQuan(item.id, newQuan)
    }

    const deleteItem = (id) => {
        removeItem(item.id)
    }

    return (
        <div className="product">
            <div className="product-image">
                <img src={item.image} alt="product"/>
            </div>
            <div className="product-details">
                <div className="product-title">{item.name}</div>
                <p className="product-description">{item.description.slice(0, 250)}...</p>
            </div>
            <div className="product-price">{item.price}</div>
            <div className="product-quantity">
                <input onChange={addQuan} onKeyDown={minusQuan} onKeyUp={plusQuantity} type="number" value={quantity} min="1"/>
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