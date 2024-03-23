import { useState, useEffect } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { getTransactions } from "./utils/APIRoutes";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(getTransactions);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setTransactions(data);
        } else {
          throw new Error("Failed to fetch transactions");
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
        alert("Failed to fetch transactions");
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <History
          transactions={transactions}
          setTransactions={setTransactions} // Pass setTransactions to History component
        />
        <AddTransaction />
      </div>
    </>
  );
};

export default App;
