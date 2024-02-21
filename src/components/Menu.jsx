import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Ingredients from "./Ingredientes.jsx";
import { PizzaContext } from "../context/ContextProvider";

const Menu = () => {
  const  {menu, addToCart}  = useContext(PizzaContext);
  const  {apiData, setApidata}  = useContext(PizzaContext);
  const navigate = useNavigate();

  const viewPizza = (id) => navigate(`/pizza/${id}`);

  return (
    <section className="menu">
      {apiData.map((item) => (
          <div className="card" key={item.id}>
            <div className="content" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>

              <Ingredients ingredients={item.ingredients} />

              <h3 className="price">${item.price}</h3>

              <div className="boton-row">
                <button
                  className="boton boton-primary"
                  onClick={() => viewPizza(item.id)}
                >
                  Detalles
                </button>
                <button
                  className="boton boton-secondary"
                  onClick={() => addToCart(item)}
                >
                  Añadir
                </button>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Menu;
