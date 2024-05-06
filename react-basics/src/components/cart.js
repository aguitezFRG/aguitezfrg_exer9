import React from "react";

export default function CartList(props) {
    const cart = props.list;
    const [isHovered, setIsHovered] = React.useState(false);

    const computeTotal = (item) => {
        var total = item.quantity * item.price;
        return total;
    }

    const handleRemoveItem = (item) => {
        props.setCart((curr_cart) => {
            const new_cart = curr_cart.filter((cart_item) => cart_item.id !== item.id)   
        console.log("Successfully removed " + item.name + " from the cart");
        return new_cart;
        });
    }

    return (
        <div className="cart">
            <div className="cart_header">
                <p id="cart_title">Shopping Cart</p>
                <p id="num_items">Item Count: {cart.length}</p>
            </div>
            {cart.length === 0 ? (
                <div className="emptyCart">
                    Cart is currently empty.
                </div>
            ) : (
                <div className="cart_items">
                    {cart.map(cart_item => (
                    <div key={cart_item.id} className={`cart_item ${isHovered === cart_item.id ? 'hovered' : ''}`}>
                        <button className="removeItem" 
                            onClick={() => handleRemoveItem(cart_item)} 
                            onMouseEnter={() => setIsHovered(cart_item.id)} 
                            onMouseLeave={() => setIsHovered(null)}>
                                Remove
                        </button>
                        <div id="cart_item_price">${computeTotal(cart_item)}</div>
                        <div id="cart_item_quantity">QTY: {cart_item.quantity}</div>
                        <div id="cart_item_name">{cart_item.name}</div>
                    </div>
                    ))}
                </div>
            )}
        </div>
    )
};