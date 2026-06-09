import React, { useState, useEffect } from "react";
import './filterstyle.css';

export default function FilterCategory() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState([]);

  const categories = [
    {
      id: 1,
      name: "Bill",
      image: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png"
    },

    {
      id: 2,
      name: "Food",
      image: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png"
    },

    {
      id: 3,
      name: "App",
      image: "https://cdn-icons-png.flaticon.com/128/888/888879.png"
    },

    {
      id: 4,
      name: "Medicine",
      image: "https://cdn-icons-png.flaticon.com/128/2966/2966486.png"
    },

    {
      id: 5,
      name: "Others",
      image: "https://cdn-icons-png.flaticon.com/128/565/565547.png"
    }
  ];

    // load data from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("values")) || [];
    setData(stored);
  }, []);

    // FILTER LOGIC 
  const filteredData = data.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "" || item.category === selectedCategory;

    return matchName && matchCategory;
  });


  return (

    <div className="filterContainer">

      <p>Search By Name</p>
      <div className='search'>
        <input
          type="text" placeholder='Search By Name....' value={search} onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
      <p>Search By Category</p>
      <button onClick={() => setSelectedCategory("")}>All</button>
      <div className="filtercategoryRow">

        {categories.map((item) => (

          <div className="filtercategoryCard" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
              className="filtercategoryImage"
            onClick={() => setSelectedCategory(item.name)}
            style={{ cursor: "pointer" }}

            />

            <p>{item.name}</p>

          </div>

        ))}

      </div>

      <h3>Results</h3>

      {filteredData.length === 0 ? (
        <p>No data found</p>
      ) : (
        filteredData.map((item) => (
          <div key={item.id} className="resultCard">
            <p><b>Name:</b> {item.name}</p>
            <p><b>Category:</b> {item.category}</p>
            <p><b>Price:</b> {item.price}</p>
          </div>
        ))
      )}

    </div>
  );
}