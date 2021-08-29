import React from "react";

import Enter from "../../assets/Enter.svg";

import "./OrderNumber.style.scss";

export const OrderNumber = (props) => {
  const { value } = props;

  return (
    <div className="orderNumber">
      {value} <img alt={value} src={Enter} />
    </div>
  );
};
