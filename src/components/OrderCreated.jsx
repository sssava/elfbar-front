import React from 'react';
import created from "../images/order-created.png"
import {Link} from "react-router-dom";

const OrderCreated = () => {
    return (
        <div className="order_created">
            <h2>Your order has been created!!</h2>
            <img src={created} alt="order-created"/>
            <Link to="/"><button className="created_butt">On main</button></Link>
        </div>
    );
};

export default OrderCreated;