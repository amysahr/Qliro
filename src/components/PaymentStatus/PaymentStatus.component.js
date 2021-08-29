import React from "react";

import "./PaymentStatus.style.scss";

export const PaymentStatus = (props) => {
  const { value } = props;

  return (
    <div className={value.toString().toLowerCase().replace(/ /g, "")}>
      {value}
    </div>
  );
};
