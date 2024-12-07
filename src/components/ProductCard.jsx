const ProductCard = ({ product }) => {
    return (
      <div className="p-4 shadow-md hover:shadow-xl transition">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p>{product.price}</p>
        <button className="btn btn-primary mt-2">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  