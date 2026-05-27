import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Newform from './Pages/Newform';

function App() {
  return (
    <Router>
    <div className="App">

     <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/Newform" element={<Newform/>} />

     </Routes>
    </div>
    </Router>
  );
}

export default App;
