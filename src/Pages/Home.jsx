import React, { useState, useEffect } from "react";
import "./style.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("values")) || [];
    setData(storedData);
  }, []);

  const income = data
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + Number(item.price), 0);

  const expense = data
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + Number(item.price), 0);

  const balance = income - expense;

  return (
    <div>
      <div className="summery">
        <div className="summeryCard1">
          <h3>Monthly Income</h3>
          <p>Rs. {income}</p>
        </div>

        <div className="summeryCard2">
          <h3>Expense</h3>
          <p>Rs. {expense}</p>
        </div>

        <div className="summeryCard3">
          <h3>Balance</h3>
          <p>Rs. {balance}</p>
        </div>
      </div>

      <div style={{ width: "450px", margin: "40px auto" }}></div>
    </div>
  );
}