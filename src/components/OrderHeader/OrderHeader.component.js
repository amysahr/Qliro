import React from "react";

import "./OrderHeader.style.scss";

export const OrderHeader = () => {
  return (
    <div className="orderHeaderWrapper">
      <div>Order number</div>
      <div>Created</div>
      <div>Store</div>
      <div>Payment method</div>
      <div>Payment status</div>
      <div>Amount</div>
    </div>
  );
};
