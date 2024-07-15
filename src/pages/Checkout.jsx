import React from "react";
import "./Checkout.css";
import UserInfo from "../components/checkout/UserInfo.jsx";
import OrderSummary from "../components/checkout/OrderSummary.jsx";


function Checkout() {
    return (
        <div className="container checkout-container">
            <UserInfo />
            <OrderSummary />
        </div>
    );
}

export default Checkout;
