import CartList from "../components/CartList.jsx";
import { useContext } from "react";
import { PizzaContext } from "../context/ContextProvider";

const Cart = () => {
  const { cart, addToCart, removeFromCart, cartTotal } = useContext(PizzaContext);

  return (
    <main>
      <div className="cart">
        <h2>Detalles del pedido:</h2>
        {cart.length !== 0 ? (
          <CartList
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartTotal={cartTotal}
          />
        ) : (
          <p className="empty-cart">No hay elementos en el carrito</p>
        )}
      </div>
    </main>
  );
};

export default Cart;
