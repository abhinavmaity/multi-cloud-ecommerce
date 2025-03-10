const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  axios
    .get(
      "https://multi-cloud-ecommerce-backend-814232976544.us-central1.run.app/api/products"
    )
    .then((response) => setProducts(response.data))
    .catch((error) => {
      console.error("Error fetching products:", error);
      setError("Failed to load products.");
    })
    .finally(() => setLoading(false));
}, []);

return (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold">Products</h2>
    {loading && <p>Loading...</p>}
    {error && <p className="text-red-500">{error}</p>}
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  </div>
);
