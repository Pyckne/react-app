import { createContext, useState } from "react";

export const CartContext = createContext({});
CartContext.displayName = "CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const addItem = (item, quantityToAdd) => {
        const itemToAdd = {
            ...item,
            quantity: quantityToAdd
        };

        const itemAlreadyInCart = cart.find(itemInCart => itemInCart.id === itemToAdd.id);
        if (itemAlreadyInCart) {
            itemAlreadyInCart.quantity += quantityToAdd;
            setCart(cart.map(itemInCart => itemInCart.id === itemToAdd.id ? itemAlreadyInCart : itemInCart));
        } else {
            setCart([...cart, itemToAdd]);
        }

        setTotal(total + item.price * quantityToAdd);
        setTotalItems(totalItems + quantityToAdd);
    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        setTotal(newCart.reduce((acc, item) => acc + item.price * item.quantityToAdd, 0));
        setTotalItems(newCart.reduce((acc, item) => acc + item.quantityToAdd, 0));
    };

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setTotalItems(0);
    }

    return (
        <CartContext.Provider value={{
            cart,
            removeItem,
            addItem,
            total,
            clearCart,
            totalItems 
        }}>
            {children}
        </CartContext.Provider>
    );
}