import React from "react";

export const Address = (props) => {
  const { title, address, icon } = props;
  return (
    <div className="informationWrapper">
      <div className="informationHeader">
        <img alt={title} src={icon} /> {title}
      </div>
      <div className="informationDetail">{address}</div>
    </div>
  );
};
