import React from "react";

import classes from "./ExpenseHeader.module.css";
import Logo from "../Images/logo.svg";

const ExpenseHeader = () => {
  return (
    <section>
      <div className={classes["expense-header"]}>
        <div className={classes["expense__balance"]}>
          <p>My balance</p>
          <h1>$893.33</h1>
        </div>
        <div>
          <img className="logo" src={Logo} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default ExpenseHeader;