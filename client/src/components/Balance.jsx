import React from "react";

const Balance = ({ transactions }) => {
  const calculateBalance = () => {
    const amounts = transactions.map((transaction) => transaction.amount);
    return amounts.reduce((total, amount) => total + amount, 0).toFixed(2);
  };

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${calculateBalance()}</h1>
    </>
  );
};

export default Balance;
