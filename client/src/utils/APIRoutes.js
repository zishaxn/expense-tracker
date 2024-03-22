export const host =
  "https://expense-tracker-2u16isg2y-zishans-projects.vercel.app";

export const getTransactions = `https://expense-tracker-2u16isg2y-zishans-projects.vercel.app/api/v1/transactions`;
export const addTransactions = `http://localhost:5000//api/v1/transactions`;
// export const deleteTransactions = `${host}/api/v1/transactions/:`;
export const deleteTransaction = (id) =>
  `http://localhost:5000//api/v1/transactions/${id}`;
