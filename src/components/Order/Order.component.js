import React from "react";
import { Store } from "../Store/Store.component";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod.component";
import { PaymentStatus } from "../PaymentStatus/PaymentStatus.component";
import { OrderNumber } from "../OrderNumber/OrderNumber.component";

import "./Order.style.scss";

export const Order = (props) => {
  const { order } = props;

  return (
    <div className="rowsWrapper">
      <div>
        <OrderNumber value={order.orderNumber} />
      </div>
      <div>{order.createDate}</div>
      <div>
        <Store value={order.store} />
      </div>
      <div>
        <PaymentMethod value={order.paymentMethod} />
      </div>
      <div>
        <PaymentStatus value={order.paymentStatus} />
      </div>
      <div>{order.amount}</div>
    </div>
  );
};
