export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button className="mt-2 bg-green-500 text-white p-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
