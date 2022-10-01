import React from "react";

import classes from "./ChartValue.module.css";

const ChartValue = (props) => {
  return <div className={classes.value}>${props.amount}</div>;
};

export default ChartValue;
