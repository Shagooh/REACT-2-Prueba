import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { PizzaContext } from "../context/ContextProvider.jsx";

const Pizza = () => {
  const { id } = useParams();
  const { menu, addToCart } = useContext(PizzaContext);
//   const [apiData, setApidata] = useState([]);

  //   const pizza = apiData.find((pizza) => pizza.name === id);
  //   const { name, description, price, ingredients, img } = pizza;

  const [pizza, setPizza] = useState({ ingredients: [], price: 0 });

  useEffect(() => {
    const pizza = menu.filter((item) => item.id === id);
    setPizza([pizza]);
    console.log(pizza)
  }, []);

  return (
    <main>
      <div className="pizza-view">
        <section
          className="image"
          style={{ backgroundImage: `url(${pizza.img})` }}
        ></section>
        <article className="content">
          <h4>{pizza.name}</h4>
          <p className="description">{pizza.desc}</p>

          {/* <Ingredients ingredients={apiData.ingredients} /> */}

          <div className="price-row">
            <h3>Precio: ${pizza.price}</h3>
            <button
              className="boton boton-primary"
              onClick={() => addToCart(pizza)}
            >
              Añadir
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Pizza;
