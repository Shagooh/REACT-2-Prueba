import { useContext } from "react";
import { PizzaContext } from "../context/ContextProvider";

const CartList = ( ) => {
  const { cart, addToCart, removeFromCart, cartTotal } = useContext(PizzaContext);

  return (
    <div>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <div className="product">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
              <div className="price">
                <h4>$ {item.price * item.count}</h4>
              </div>
              <div className="btns">
                <button
                  className="boton boton-primary"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
                <p className="bold">{item.count}</p>
                <button
                  className="boton boton-secondary"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="total">
        <h3>Total: $ {cartTotal()} </h3>
        <button className="boton boton-primary">Ir a pagar</button>
      </div>
    </div>
  );
};

export default CartList;
