import ChartValue from "./ChartValue";
import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  return (
    <div className={classes["expense__day"]}>
      <ChartValue amount={props.amount} />
      <div
        style={{ height: `${props.amount}px` }}
        className={classes["chart-bar"]}
      ></div>
      <div className={classes.day}>{props.day}</div>
    </div>
  );
};

export default ChartBar;
