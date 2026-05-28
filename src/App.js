import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Newform from "./Pages/Newform";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import { useState } from "react";
import FilterCategory from "./Pages/FilterCategory";


function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>

      <Navbar open={open} setOpen={setOpen} />

      <Sidebar open={open} />

    
      <div className={`content ${open ? "shift" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Newform" element={<Newform />} />
          <Route path="/FilterCategory" element={<FilterCategory />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;