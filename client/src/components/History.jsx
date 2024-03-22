import { deleteTransaction } from "../utils/APIRoutes";

const History = ({ transactions, setTransactions }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(deleteTransaction(id), {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the transaction with the specified _id
        setTransactions(
          transactions.filter((transaction) => transaction._id !== id)
        );
      } else {
        throw new Error("Failed to delete transaction");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
      alert("Failed to delete transaction");
    }
  };

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction._id} // Use _id as the key
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(transaction._id)} // Pass _id to handleDelete
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;
