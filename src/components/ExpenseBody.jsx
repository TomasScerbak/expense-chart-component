import React from "react";

import classes from "./ExpenseBody.module.css";

const ExpenseBody = () => {
  return (
    <section>
      <div className={classes.card}>
        <h1 className={classes["card__heading"]}>Spending-Last 7 days</h1>
        <div className={classes["expense__day"]}>
          <div className={classes["chart-bar"]}></div>
          <div className={classes.day}>mon</div>
        </div>
        <div className={classes.line}></div>
        <div className={classes["card__footer"]}>
          <div>
            <p className={classes["footer__paragraph"]}>Total this month</p>
            <h1 className={classes.total}>$478.35</h1>
          </div>
          <div className={classes["footer__right"]}>
            <h2 className={classes["growth"]}>+2.4%</h2>
            <p className={classes["footer__paragraph"]}>from last month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseBody;
