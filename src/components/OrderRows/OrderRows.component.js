import React, { useContext } from "react";
import { Order } from "../Order/Order.component";
import { OrderHeader } from "../OrderHeader/OrderHeader.component";

import { PaginationContext } from "../../context/Pagination.context";
import { Pagination } from "../Pagination/Pagination.component";

import "./OrderRows.style.scss";

export const OrderRows = (props) => {
  const { orders } = props;
  const { currentPageNumber, numberOfItemsPerPage } =
    useContext(PaginationContext);

  const firstOrderIndex = (currentPageNumber - 1) * numberOfItemsPerPage;
  const currentPageOrders = orders.slice(
    firstOrderIndex,
    firstOrderIndex + numberOfItemsPerPage
  );

  return (
    <div className="orderRowsWrapper">
      <OrderHeader />
      {currentPageOrders.map((order) => {
        return <Order key={order.orderNumber} order={order} />;
      })}
      <Pagination />
    </div>
  );
};
