import React from "react";
import HelpIcon from "../../assets/help.svg";

import "./Help.style.scss";

export const Help = () => {
  return (
    <div className="helpWrapper">
      <img alt="help" src={HelpIcon} />
      <span>Help</span>
    </div>
  );
};
