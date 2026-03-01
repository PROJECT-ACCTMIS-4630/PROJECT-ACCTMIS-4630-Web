import React, { useState } from "react";
import "./App.css";

function App() {
  // This is the state logic from Version 1 (The "Proper" way)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="/">Project ACCTMIS 4630</a>
          {/* This button opens the menu using React State */}
          <button onClick={() => setMenuOpen(true)}>&#9776;</button>
        </div>
        <div className="header-links">
          <a href="/">Cart</a>
          <a href="/">Sign In</a>
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
        <div className="content">
          <ul className="products">
            {/* PRODUCT 1 */}
            <li>
              <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name"><a href="/">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            {/* PRODUCT 2 */}
            <li>
              <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name"><a href="/">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            {/* PRODUCT 3 */}
            <li>
              <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name"><a href="/">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            {/* PRODUCT 4 */}
            <li>
              <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name"><a href="/">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            {/* PRODUCT 5 */}
            <li>
              <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product" />
                <div className="product-name"><a href="/">Slim Shirt</a></div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        © 2022 Project ACCTMIS 4630
      </footer>
    </div>
  );
}

export default App;
