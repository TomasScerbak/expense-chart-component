import React from "react";

import ChartBar from "./ChartBar";
import classes from "./ExpenseBody.module.css";

import expenseData from "../data.json";

const ExpenseBody = (props) => {
  return (
    <section>
      <div className={classes.card}>
        <h1 className={classes["card__heading"]}>Spending-Last 7 days</h1>
        <div className={classes.chart}>
          {expenseData.map((expense) => {
            return (
              <ChartBar
                amount={expense.amount}
                day={expense.day}
                key={expense.day}
              />
            );
          })}
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
