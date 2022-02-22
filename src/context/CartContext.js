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
        const itemToRemove = cart.find(item => item.id === id);
        const itemQuantity = itemToRemove.quantity;
        setCart(cart.filter(item => item.id !== id));
        setTotal(total - itemToRemove.price * itemQuantity);
        setTotalItems(totalItems - itemQuantity);
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