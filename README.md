# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the max value bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links

- Solution URL: [Add solution URL here](https://github.com/TomasScerbak/expense-chart-component.git)
- Live Site URL: [Add live site URL here](https://statuesque-souffle-8c86fe.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS modules
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I've learnt how to take data from dummy json file and use them to dynamically pass values into compoents as well as how to pass data via props. How to dynamically apply styles under certain condition.
It was also very good practice to separate project into small components and render components dynamically thru data.

```js
import ChartBar from "./ChartBar";
import classes from "./ExpenseBody.module.css";

import expenseData from "../data.json";

const ExpenseBody = (props) => {
  const expenseValues = expenseData.map((value) => value.amount);
  let maxValue = Math.max(...expenseValues);

  return (
    <section>
      <div className={classes.card}>
        <h1 className={classes["card__heading"]}>Spending-Last 7 days</h1>
        <div className={classes.chart}>
          {expenseData.map((expense) => {
            return (
              <ChartBar
                className={expense.amount === maxValue ? "blue" : "orange"}
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
```

### Continued development

I will practice React.js and build more projects with more complex issues.

## Author

- Frontend Mentor - [@TomasScerbak](https://www.frontendmentor.io/profile/TomasScerbak)
