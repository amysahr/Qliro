import React from "react";

import "./Store.style.scss";

export const Store = (props) => {
  const { value } = props;

  return (
    <div>
      <img
        className="paymentStoreIcon"
        alt={value.butikName}
        src={value.icon}
      />{" "}
      {value.butikName}
    </div>
  );
};
