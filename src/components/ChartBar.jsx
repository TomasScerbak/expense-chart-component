import { useState } from "react";

import ChartValue from "./ChartValue";

import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const isVisibleHandler = () => {
    setIsVisible((prev) => (!prev ? true : false));
  };

  return (
    <div className={classes["expense__day"]}>
      {isVisible && <ChartValue amount={props.amount} />}
      <div
        onMouseEnter={isVisibleHandler}
        onMouseLeave={isVisibleHandler}
        style={{
          height: `${props.amount}px`,
        }}
        className={`${classes["chart-bar"]} ${props.className}`}
      ></div>
      <div className={classes.day}>{props.day}</div>
    </div>
  );
};

export default ChartBar;
