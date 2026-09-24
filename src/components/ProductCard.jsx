import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, variant = 'catalog' }) {
  const { addToCart, items, updateQuantity } = useCart();
  const cartItem = items.find((item) => item.id === product.id);
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuantity = (e, quantity) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, quantity);
  };

  const cartControl = cartItem ? (
    <span className="product-card__stepper" onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={(e) => handleQuantity(e, cartItem.quantity - 1)} aria-label={`Remove one ${product.name}`}>
        −
      </button>
      <strong>{cartItem.quantity}</strong>
      <button type="button" onClick={(e) => handleQuantity(e, cartItem.quantity + 1)} aria-label={`Add one ${product.name}`}>
        +
      </button>
    </span>
  ) : (
    <button type="button" className="product-card__add" onClick={handleAdd}>
      ADD +
    </button>
  );

  if (variant === 'featured') {
    return (
      <article className="product-card product-card--featured">
        <Link to={`/products/${product.slug}`} className="product-card__image-link">
          <div className="product-card__image-wrap">
            {discount && <span className="product-card__badge">{discount}% OFF</span>}
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-card__image"
              loading="lazy"
            />
            {cartControl}
          </div>
        </Link>
        <div className="product-card__body">
          <Link to={`/products/${product.slug}`}>
            <h3 className="product-card__name">{product.name}</h3>
          </Link>
          <div className="product-card__footer">
            <div className="product-card__pricing">
              {product.originalPrice && (
                <span className="product-card__original">₹{product.originalPrice}</span>
              )}
              <span className="product-card__price">₹{product.price}</span>
            </div>
            <span className="product-card__qty">Qty: {product.size}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="product-card product-card--catalog">
      <div className="product-card__image-wrap">
        {discount && <span className="product-card__badge">{discount}% OFF</span>}
        <Link to={`/products/${product.slug}`} className="product-card__image-link">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card__image"
            loading="lazy"
          />
        </Link>
        {cartControl}
      </div>

      <div className="product-card__body">
        <Link to={`/products/${product.slug}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
        <div className="product-card__footer">
          <div className="product-card__pricing">
            {product.originalPrice && (
              <span className="product-card__original">₹{product.originalPrice}</span>
            )}
            <span className="product-card__price">₹{product.price}</span>
          </div>
          <span className="product-card__qty">Qty: {product.size}</span>
        </div>
      </div>
    </article>
  );
}
