import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/ContextProvider";

const Navbar = () => {
  const { cartTotal } = useContext(PizzaContext);
  return (
    <nav className="main-nav">
      <Link to="/">
        <h3>
          🍕Pizzería Mamma Mia
        </h3>
      </Link>
      <Link to="/carrito">
        <i> 🛒 $ {cartTotal()} </i>
      </Link>
    </nav>
  );
};

export default Navbar;
