import {useState} from "react"; // for use state
import { Trash3Fill } from 'react-bootstrap-icons';

export default function CartList(props) {
    const cart = props.list;    // extracts the cart array 
    const [isHovered, setIsHovered] = useState(false);  // adds an isHovered attribute to each cart item

    const computeTotal = (item) => {
        var total = item.quantity * item.price;
        return total;
    };

    const handleRemoveItem = (item) => {
        props.setCart((curr_cart) => {
            // retains only the cart items apart from the removed one
            const new_cart = curr_cart.filter((cart_item) => cart_item.id !== item.id)   
            console.log("Successfully removed " + item.name + " from the cart");

            if(isHovered === item.id) { // resets isHovered attribute of items that got removed
                setIsHovered(null);
            };

            return new_cart;
            });
    };

    const totalCount = (cart) => {  //  function that tallies the total number of items
        var total = 0
        cart.forEach(cart_item => {
            total += cart_item.quantity
        });
        return total;
    }

    return (
        <div className="cart">
            <div className="cart_header">
                <p id="cart_title">Shopping Cart</p>
                <p id="num_items">Item Count: {totalCount(cart)}</p>
            </div>
            {cart.length === 0 ? (
                <div id="emptyCart">
                    Add items to cart
                </div>
            ) : (
                <div className="cart_items">
                    {/* maps each item of the cart */}
                    {cart.map(cart_item => (
                        // uses conditional operator for added hover suffix class for added ux
                        <div key={cart_item.id} className={`cart_item ${isHovered === cart_item.id ? 'hovered' : ''}`}>
                            <button className="removeItem" 
                                onClick={() => handleRemoveItem(cart_item)} 
                                onMouseEnter={() => setIsHovered(cart_item.id)} 
                                onMouseLeave={() => setIsHovered(null)}>
                                    <Trash3Fill />
                            </button>
                            <div id="cart_item_price">${computeTotal(cart_item)}</div>
                            <div id="cart_item_quantity">QTY: {cart_item.quantity}</div>
                            <div id="cart_item_name">{cart_item.name}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};