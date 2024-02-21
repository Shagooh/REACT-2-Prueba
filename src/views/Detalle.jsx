import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Ingredients from "../components/Ingredientes.jsx"
import { PizzaContext } from "../context/ContextProvider.jsx";

const Pizza = () => {
    const { id } = useParams()
    const { menu, addToCart } = useContext(PizzaContext)
    const { pizza, setPizza } = useState()
    

    return (
        <main>
            <div className="pizza-view">
                <section className="image" style={{ backgroundImage: `url(${pizza.img})` }}>
                </section>
                <article className="content">
                    <h4>{pizza.name}</h4>
                    <p className="desc">{pizza.desc}</p>

                    <Ingredients ingredients={pizza.ingredients} />

                    <div className="price-row">
                        <h3>Precio: ${(pizza.price)}</h3>

                        <button className="boton boton-primary" onClick={() => addToCart(pizza)}>Añadir</button>
                    </div>
                </article>
            </div>
        </main>
    )
}

export default Pizza
