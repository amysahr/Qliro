import React from "react";

import "./PaymentMethod.style.scss";

export const PaymentMethod = (props) => {
  const { value } = props;

  return (
    <div>
      <img className="paymentMethodIcon" alt={value.name} src={value.logo} />{" "}
      {value.name}
    </div>
  );
};
