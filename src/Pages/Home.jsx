import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import "./style.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("values")) || [];
    setData(storedData);
  }, []);

  // ---------- TOTALS ----------
  const income = data
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + Number(item.price), 0);

  const expense = data
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + Math.abs(Number(item.price)), 0);

  const balance = income - expense;

  // ---------- PIE DATA ----------
  const pieData = [
    { name: "Balance", value: balance, color: "#4CAF50" },
    { name: "Expense", value: expense, color: "#F44336" },
  ];

  // ---------- MONTHLY GROUPING ----------
  const monthlyData = {};

  data.forEach((item) => {
    const month = new Date(item.date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!monthlyData[month]) {
      monthlyData[month] = { month, income: 0, expense: 0 };
    }

    if (item.type === "Income") {
      monthlyData[month].income += Number(item.price);
    } else {
      monthlyData[month].expense += Math.abs(Number(item.price));
    }
  });

  const chartData = Object.values(monthlyData);

  return (
    <div>
      {/* ---------- SUMMARY CARDS ---------- */}
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

      {/* ---------- PIE CHART ---------- */}
      <div style={{ width: "450px", height: "350px", margin: "40px auto" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ---------- LINE CHART ---------- */}
      <div style={{ width: "90%", height: "400px", margin: "40px auto" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#4CAF50"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#F44336"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

{/*bar cahar*/}
      <div style={{ width: "90%", height: "400px", margin: "40px auto" }}>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Bar dataKey="income" fill="#4CAF50" name="Income" />
      <Bar dataKey="expense" fill="#F44336" name="Expense" />
    </BarChart>
  </ResponsiveContainer>
</div>
    </div>



  );
}