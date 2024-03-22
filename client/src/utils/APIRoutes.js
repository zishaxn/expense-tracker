export const host = "http://localhost:5000";

export const getTransactions = `${host}/api/v1/transactions`;
export const addTransactions = `${host}/api/v1/transactions`;
// export const deleteTransactions = `${host}/api/v1/transactions/:`;
export const deleteTransaction = (id) => `${host}/api/v1/transactions/${id}`;
