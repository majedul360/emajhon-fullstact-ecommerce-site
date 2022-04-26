import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import OrderReview from "./components/orderReview/OrderReview";
import About from "./components/about/About";
import Inventory from "./components/inventory/Inventory";
import Registar from "./components/registar/Registar";
import Login from "./components/login/Login";
import Shipment from "./components/shipment/Shipment";
import Requireauth from "./components/requireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/order-review" element={<OrderReview />} />
        <Route
          path="/shipment"
          element={
            <Requireauth>
              <Shipment />
            </Requireauth>
          }
        />
        <Route
          path="/manage-inventory"
          element={
            <Requireauth>
              <Inventory />
            </Requireauth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/registar" element={<Registar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
