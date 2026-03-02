import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

import Orders from './Orders/Orders';
import OrderDetail from "./Orders/OrderDetail";

import PaymentScreen from "./Payment/Payment";

function App() {
  // This is the state logic from Version 1 (The "Proper" way)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <a href="/">Project ACCTMIS 4630</a>
            {/* This button opens the menu using React State */}
            <button onClick={() => setMenuOpen(true)}>&#9776;</button>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
          </div>
        </header>

        {/* This sidebar shows/hides based on the menuOpen variable */}
        <aside className={menuOpen ? "sidebar open" : "sidebar"}>
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={() => setMenuOpen(false)}>X</button>
          <ul>
            <li><a href="/">Pants</a></li>
            <li><a href="/">Shirts</a></li>
          </ul>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<OrderDetail />}></Route>
            <Route path="/payment" element={<PaymentScreen />}></Route>
          </Routes>
        </main>

        <footer className="footer">
          © 2022 Project ACCTMIS 4630
        </footer>
      </div>
    </Router>
  );
}

export default App;
