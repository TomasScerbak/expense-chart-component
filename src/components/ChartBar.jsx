import React from "react";

import ChartValue from "./ChartValue";
import classes from "./ChartBar.module.css";

const ChartBar = () => {
  return (
    <div className={classes["expense__day"]}>
      <ChartValue />
      <div className={classes["chart-bar"]}></div>
      <div className={classes.day}>mon</div>
    </div>
  );
};

export default ChartBar;
