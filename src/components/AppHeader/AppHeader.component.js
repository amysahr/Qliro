import React from "react";
import { useSelector } from "react-redux";

import "./AppHeader.style.scss";

export const AppHeader = () => {
  const state = useSelector((state) => state.staticContent);

  return (
    <div className="headerWrapper">
      <div className="titleWrapper">
        <h3>
          {state.firstName} {state.lastName} {`(${state.identificationNumber})`}
        </h3>
      </div>
    </div>
  );
};
