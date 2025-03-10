useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(storedCart);
}, []);

const removeFromCart = (index) => {
  const updatedCart = [...cart];
  updatedCart.splice(index, 1);
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

return (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold">Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Cart is empty.</p>
    ) : (
      cart.map((item, index) => (
        <div key={index} className="border p-4 my-2 flex justify-between">
          <span>
            {item.name} - ${item.price}
          </span>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={() => removeFromCart(index)}
          >
            Remove
          </button>
        </div>
      ))
    )}
    <button className="bg-blue-500 text-white p-2 mt-4">
      Proceed to Checkout
    </button>
  </div>
);
