import React from "react";

const IncomeExpense = ({ transactions }) => {
  const calculateIncome = () => {
    const income = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((total, transaction) => total + transaction.amount, 0);
    return income.toFixed(2);
  };

  const calculateExpense = () => {
    const expense = transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((total, transaction) => total + transaction.amount, 0);
    return Math.abs(expense).toFixed(2);
  };

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            ${calculateIncome()}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            ${calculateExpense()}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
