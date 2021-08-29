import React from "react";
import { useSelector } from "react-redux";

import { Information } from "../Information/Information.component";
import { Address } from "../Address/Address.component";
import ShippingIcon from "../../assets/Shipping.svg";
import InvoiceIcon from "../../assets/Frame.svg";

import "./InformationContainer.style.scss";

export const InformationContainer = () => {
  const state = useSelector((state) => state.staticContent);
  return (
    <div className="infoWrapper">
      <Information
        name={state.firstName}
        email={state.email}
        phone={state.phoneNumber}
      />
      <Address
        title="Shipping address"
        icon={ShippingIcon}
        address={state.shippingAddress}
      />
      <Address
        title="Invoice address"
        icon={InvoiceIcon}
        address={state.invoiceAddress}
      />
    </div>
  );
};
