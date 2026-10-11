import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-bar">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)} USD</p>
      </div>
      <p className="product-description">{description}</p>
    </div>
  );
}

export default ProductCard;