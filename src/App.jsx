import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdoptPet from "./pages/AdoptPet";
import AdminLogin from "./pages/AdminLogin";

import Dashboard from "./pages/admin/Dashboard";
import AddAnimal from "./pages/admin/AddAnimal";
import StockList from "./pages/admin/Stock";
import SoldAnimals from "./pages/admin/Sold";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adopt" element={<AdoptPet />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* dashbord routign  */}
        <Route path="/admin/dashboard" element={<Dashboard />}>
          <Route path="add" element={<AddAnimal />} />
          <Route path="stock" element={<StockList />} />
          <Route path="sold" element={<SoldAnimals />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
