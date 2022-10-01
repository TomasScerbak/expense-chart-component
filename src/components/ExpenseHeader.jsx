import React from "react";

import classes from "./ExpenseHeader.module.css";
import Logo from "../Images/logo.svg";

import expenseData from "../data.json";

const ExpenseHeader = () => {
  const amounts = expenseData.map((data) => data.amount);
  const weekBalance = amounts.reduce((accu, curVal) => accu + curVal);

  return (
    <section>
      <div className={classes["expense-header"]}>
        <div className={classes["expense__balance"]}>
          <p className={classes.balance}>My balance this week</p>
          <h1 className={classes.cash}>${weekBalance}</h1>
        </div>
        <div>
          <img className="logo" src={Logo} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default ExpenseHeader;
