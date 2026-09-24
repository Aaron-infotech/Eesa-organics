import {
  ArrowLeft,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useCart } from '../context/CartContext';
import { buildWhatsAppCartUrl, openWhatsApp } from '../utils/whatsapp';

const DELIVERY_CHARGE = 150;

export default function Cart() {
  const { items, totalItems, totalPrice, updateQuantity, clearCart } = useCart();
  const totalPayable = totalPrice + (items.length > 0 ? DELIVERY_CHARGE : 0);

  if (items.length === 0) {
    return (
      <>
        <PageMeta title="Your Cart" description="Review your Eesa Organics cart." />
        <section className="cart-page cart-page--empty">
          <ShoppingBag size={22} />
          <h1>Your cart is empty</h1>
          <p>Add natural products to your cart to review your order here.</p>
          <Link to="/products" className="btn btn--primary">Continue Shopping</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <PageMeta title="Your Cart" description="Review your Eesa Organics cart and place your order." />
      <section className="cart-page">
        <div className="cart-page__topbar container">
          <Link to="/products" className="cart-page__back"><ArrowLeft size={17} /> Continue Shopping</Link>
          <h1><span><ShoppingBag size={21} /></span> Your Organic Farm Cart <em>{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</em></h1>
          <Link to="/products" className="cart-page__close" aria-label="Close cart"><X size={19} /></Link>
        </div>

        <div className="container cart-layout">
          <div className="cart-items">
            <div className="cart-items__heading">
              <h2>Item Details ({totalItems})</h2>
              <button type="button" className="cart-clear" onClick={clearCart}>Clear Cart</button>
            </div>

            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <Link to={`/products/${item.slug}`} className="cart-item__image">
                  <img src={item.images[0]} alt={item.name} />
                </Link>
                <div className="cart-item__details">
                  <h3>{item.name} <span>{item.size}</span></h3>
                  <p>₹{item.price} per unit</p>
                  <div className="cart-item__actions">
                    <div className="cart-stepper" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Remove one ${item.name}`}><Minus size={14} /></button>
                      <strong>{item.quantity}</strong>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Add one ${item.name}`}><Plus size={14} /></button>
                    </div>
                    <button type="button" className="cart-item__remove" onClick={() => updateQuantity(item.id, 0)}>
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
                <div className="cart-item__subtotal">
                  <span>SUBTOTAL</span>
                  <strong>₹{item.price * item.quantity}</strong>
                </div>
              </article>
            ))}
          </div>

          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-summary__line"><span>Items Subtotal</span><strong>₹{totalPrice}</strong></div>
            <div className="order-summary__line"><span>Delivery Charge <small>(within 30 km)</small></span><strong>₹{DELIVERY_CHARGE}</strong></div>
            <div className="order-summary__total"><span>Total Payable</span><strong>₹{totalPayable}</strong></div>
            <button type="button" className="order-summary__whatsapp" onClick={() => openWhatsApp(buildWhatsAppCartUrl(items))}>
              <MessageCircle size={19} /> Order via WhatsApp Now
            </button>
            <p className="order-summary__note">Instant order placement directly with farm management via WhatsApp.</p>
            <div className="order-summary__benefits">
              <p><ShieldCheck size={16} /> 100% Pure &amp; Organic Guarantee</p>
              <p><Truck size={16} /> Fresh Morning Farm Dispatch</p>
              <p><Sparkles size={16} /> No Middlemen · Direct Farm Support</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
