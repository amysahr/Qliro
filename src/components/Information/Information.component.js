import React from "react";
import EmailPhone from "../../assets/EmailPhone.svg";

export const Information = (props) => {
  const { name, email, phone } = props;
  return (
    <div className="informationWrapper">
      <div className="informationHeader">
        <img alt="emailPhone" src={EmailPhone} /> Contact {name}
      </div>
      <div className="informationDetail">{email}</div>
      <div className="informationDetail">{phone}</div>
    </div>
  );
};
