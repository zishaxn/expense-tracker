import { useState } from "react";
import { addTransactions } from "../utils/APIRoutes";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text || !amount) {
      alert("Please enter a valid text and amount");
      return;
    }
    try {
      const response = await fetch(addTransactions, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          amount: +amount,
        }),
      });
      console.log(response);
      if (response.ok) {
        console.log(response);
        // Assuming you want to reload the transactions after adding a new one
        window.location.reload();
      } else {
        throw new Error("Failed to add transaction");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Failed to add transaction");
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
