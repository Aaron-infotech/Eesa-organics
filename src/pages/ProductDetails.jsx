import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Phone } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductImage from '../components/ProductImage';
import { getProductBySlug } from '../data/products';
import { CONTACT_INFO } from '../config/contact';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const adjustQuantity = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <>
      <PageMeta
        title={product.name}
        description={product.shortDescription}
      />

      <section className="section product-details">
        <div className="container">
          <Link to="/products" className="back-link">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Products
          </Link>

          <div className="product-details__grid">
            <div className="product-details__gallery">
              <div className="product-details__main-image">
                {discount && <span className="product-card__badge">{discount}% OFF</span>}
                <ProductImage
                  product={{ ...product, images: [product.images[activeImage]] }}
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="product-details__thumbnails">
                  {product.images.map((img, index) => (
                    <button
                      key={img}
                      type="button"
                      className={`product-details__thumb ${activeImage === index ? 'product-details__thumb--active' : ''}`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img src={img} alt={`${product.name} view ${index + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="product-details__info">
              <span className="product-card__category">{product.category}</span>
              <h1 className="product-details__title">{product.name}</h1>
              <p className="product-details__short">{product.shortDescription}</p>

              <div className="product-details__pricing">
                <span className="product-details__price">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="product-details__original">₹{product.originalPrice}</span>
                )}
                <span className="product-details__size">{product.size}</span>
              </div>

              <div className="quantity-selector">
                <span className="quantity-selector__label">Quantity</span>
                <div className="quantity-selector__controls">
                  <button
                    type="button"
                    onClick={() => adjustQuantity(-1)}
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span aria-live="polite">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => adjustQuantity(1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="product-details__actions">
                <WhatsAppButton
                  productName={product.name}
                  price={product.price * quantity}
                  quantity={quantity}
                  size={product.size}
                  className="btn--lg"
                />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="btn btn--outline btn--lg">
                  <Phone size={18} aria-hidden="true" />
                  Call Now
                </a>
              </div>

              <div className="product-details__details">
                <h2>Product Description</h2>
                <p>{product.description}</p>

                {product.ingredients && (
                  <>
                    <h3>Ingredients</h3>
                    <p>{product.ingredients}</p>
                  </>
                )}

                {product.usage && (
                  <>
                    <h3>Usage Instructions</h3>
                    <p>{product.usage}</p>
                  </>
                )}

                {product.storage && (
                  <>
                    <h3>Storage</h3>
                    <p>{product.storage}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
