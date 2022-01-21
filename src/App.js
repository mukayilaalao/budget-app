import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Home from "./pages/Home";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const getTotal = (total) => {
    setTotal(total);
  };
  return (
    <Router>
      <NavBar total={total} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index getTotal={getTotal} />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:id" element={<Show />} />
        <Route path="/transactions/:id/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
