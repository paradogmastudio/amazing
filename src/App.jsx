import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CatalogueScreen from "./screens/CatalogueScreen";
import BasketScreen from "./screens/BasketScreen";
import UserScreen from "./screens/UserScreen";
import Navbar from "./components/Navbar";


function App() {
  const [basket, setBasket] = useState([]);

  const addBasket = (article) => {
    const updatedBasket = [...basket, article];
    setBasket(updatedBasket);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/catalogue"
          element={<CatalogueScreen addBasket={addBasket} />}
        />
        <Route path="/panier" element={<BasketScreen basket={basket} />} />
        <Route path="/user" element={<UserScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
