export const host =
  "https://expense-tracker-2u16isg2y-zishans-projects.vercel.app";
const lhost = "http://localhost:5000";

export const getTransactions = `${lhost}/api/v1/transactions`;
export const addTransactions = `${lhost}/api/v1/transactions`;
export const deleteTransaction = (id) => `${lhost}/api/v1/transactions/${id}`;
