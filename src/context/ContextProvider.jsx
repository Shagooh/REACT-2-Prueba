import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const URL = "/pizzas.json";
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [apiData, setApidata] = useState([]);
  const [pizza, setPizza] = useState([])

  const getInfoApi = async () => {
    const response = await fetch(URL);
    const { pizzas } = await response.json();
    setApidata(pizzas);
  };

  const addToCart = (apiData) => {
    const apiDataIndex = cart.findIndex((pizzas) => pizzas.id === apiData.id);
    const updateCart = [...cart];

    if (apiDataIndex === -1) {
      const pizza = {
        id: apiData.id,
        count: 1,
        price: apiData.price,
        img: apiData.img,
        name: apiData.name,
      };

      updateCart.push(pizza);
    } else {
      updateCart[apiDataIndex].count += 1;
    }

    setCart(updateCart);
  };

  const removeFromCart = (apiData) => {
    const apiDataIndex = cart.findIndex((pizza) => pizza.id === apiData.id);
    const updateCart = [...cart];

    updateCart[apiDataIndex].count -= 1;

    if (updateCart[apiDataIndex].count <= 0) {
      updateCart.splice(apiDataIndex, 1);
    }

    setCart(updateCart);
  };

  const cartTotal = () => {
    let total = 0;
    cart.forEach((apiData) => (total += apiData.count * apiData.price));

    return total;
  };

  useEffect(() => {
    getInfoApi();
  }, []);

  useEffect(() => {
    const pizza = menu.filter((apiData) => apiData.id === id);
    setPizza(pizza);
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        apiData,
        setApidata,
        menu,
        cart,
        addToCart,
        removeFromCart,
        cartTotal,
        pizza,
        setPizza
      
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
