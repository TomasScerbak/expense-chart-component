import React from "react";

import classes from "./ChartBar.module.css";

const ChartBar = () => {
  return (
    <div className={classes["expense__day"]}>
      <div className={classes["chart-bar"]}></div>
      <div className={classes.day}>mon</div>
    </div>
  );
};

export default ChartBar;
