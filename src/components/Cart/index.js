const Cart = (/* { cart, removeFromCart, addToCart, total } */) => {
return (
<div>
    <h1>Carrito</h1>
</div>
);
/*     const cartItems = cart.map(item => (
        <CartItem
        key={item.id}
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        />
    ));
    return (
        <div className="cart">
        <h2>Tu carrito</h2>
        <div className="cart__items">{cartItems}</div>
        <div className="cart__total">
            <span>Total: ${total}</span>
        </div>
        </div>
    ); */
}

export default Cart;