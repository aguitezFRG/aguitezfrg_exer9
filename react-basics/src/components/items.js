export default function ItemList(props) {
    const items = props.list;

    const handleAddToCart = (item) => {
        let temp_cart = [...props.cart];
        const itemIndex = temp_cart.findIndex((cart_item) => cart_item.id === item.id);
    
        if(itemIndex !== -1) {
            temp_cart[itemIndex].quantity += 1;
        } else {
            let cart_item = {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1
            }
            temp_cart.push(cart_item);
        }
        console.log("Successfully added", item.name, "to cart");
        props.setCart(temp_cart);
    };
    

    return (
        // shows the elements of the items array
        <div className="items">
            {/* <Item list={items} /> */}
            {items.map(item=> ( // mapping of the individual elements
                <div key={item.id} className="item">
                <div className="item_details">
                    {/* order is reversed */}
                    {/* adds a button to the bottom part of the item details  */}
                    <button className="addtocart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    <p id="item_price">${item.price}</p>
                    <p id="item_name">{item.name}</p>
                    <img className="item_img" src={item.image} alt={item.name}/>
                </div>
                </div>
            ))}
        </div>
    )
}
