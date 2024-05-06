import './App.css'; // import stylesheet
import menus from './components/menu';  // import array to be used for the "menu"
import items from './components/items'; // import array of items to be shown
import cart from './components/cart';   // import array of items in cart

function App() {
  return (
    <div className="App">
      {/* navbar containing the app name and the different "menu" */}
      <div className="topnav">
        <div className="Lazado">
          <p>Lazado</p>
        </div>
        <div className="select">
          {menus.map(menu => ( // mapping elements of the menus array
            <h3 key={menu.id} id={menu.name.toLowerCase()}> 
              {menu.name}
            </h3>
          ))}
        </div>
      </div>
      <div className="App_body">
        {/* shows the elements of the items array */}
        <div className="items">
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
        <div className="cart">
          <div className="cart_header">
            <p id="cart_title">Shopping Cart</p>
            <p id="num_items">Item Count: {cart.length}</p>
          </div>
          <div className="cart_items">
            {cart.map(cart_item => (
              <div key = {cart_item.id} className="cart_item">
                  <button className="removeItem">Remove</button>
                  <div id="cart_item_price">${computeTotal(cart_item)}</div>
                  <div id="cart_item_quantity">QTY: {cart_item.quantity}</div>
                  <div id="cart_item_name">{cart_item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// function logs to the console an item added to the cart
function handleAddToCart(item) {
  console.log(`Added ${item.name} to cart.`);
}

function computeTotal(item) {
  var total = item.quantity * item.price;
  return total;
}

document.querySelectorAll('.removeItem').forEach((button) => {
  button.addEventListener('mouseover', function() {
    this.parentNode.style.backgroundColor = '#FF6663'; // replace 'color' with your desired color
    this.parentNode.style.color = 'white';
  });
  button.addEventListener('mouseout', function() {
    this.parentNode.style.backgroundColor = ''; // resets the color when the mouse is no longer hovering over the button
    this.parentNode.style.color = '';
  });
});

export default App;
