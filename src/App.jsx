import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Detalle from "./views/Detalle.jsx";
import Error from "./views/Error.jsx";
import Cart from "./views/Cart.jsx";
import PizzaProvider from "./context/ContextProvider" ;

function App() {

  return (
    <div className="App">
      <PizzaProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pizza/:id" element={<Detalle />}></Route>
            <Route path="/carrito" element={<Cart />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
      </PizzaProvider>
    </div>
  );
}

export default App;
