import { MessageCircle } from 'lucide-react';
import { buildWhatsAppOrderUrl, openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppButton({
  productName,
  price,
  quantity = 1,
  size,
  label = 'Order on WhatsApp',
  variant = 'primary',
  className = '',
}) {
  const handleClick = () => {
    const url = buildWhatsAppOrderUrl({ productName, quantity, price, size });
    openWhatsApp(url);
  };

  return (
    <button
      type="button"
      className={`whatsapp-btn whatsapp-btn--${variant} ${className}`}
      onClick={handleClick}
      aria-label={`${label}${productName ? ` for ${productName}` : ''}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
