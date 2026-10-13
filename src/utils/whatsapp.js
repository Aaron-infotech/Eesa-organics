import { WHATSAPP_NUMBER } from '../config/contact';

export function buildWhatsAppOrderUrl({ productName, quantity = 1, price, size }) {
  if (!productName) return `https://wa.me/${WHATSAPP_NUMBER}`;

  const safeQuantity = Math.max(1, Number(quantity) || 1);
  const priceLine = price != null ? `Sample price for display: ₹${price}` : '';
  const sizeLine = size ? `Size: ${size}` : '';

  const message = `Hello Eesa Organics,

I would like to order the following product:

Product: ${productName}
Quantity: ${safeQuantity}
${sizeLine}
${priceLine}

Please share availability and delivery details.

Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;
}

export function buildWhatsAppCartUrl(items) {
  const lines = items
    .map((item) => {
      const price = item.price == null ? 'price on request' : `sample ₹${item.price * item.quantity}`;
      return `- ${item.name} x ${item.quantity} (${item.size}) - ${price}`;
    })
    .join('\n');
  const hasUnpricedItems = items.some((item) => item.price == null);
  const total = items.reduce((sum, item) => sum + (item.price ?? 0) * item.quantity, 0);
  const totalLine = hasUnpricedItems ? 'Please confirm pricing' : `Sample total: ₹${total}`;
  const message = `Hello Eesa Organics,\n\nI would like to order:\n${lines}\n\n${totalLine}\n\nThese are sample prices for display only. Please confirm actual prices, pack sizes, availability, and delivery details.\n\nThank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppEnquiryUrl({ name, phone, email, subject, message }) {
  const enquiryMessage = `Hello Eesa Organics,

I have an enquiry:

Name: ${name || 'Not provided'}
Phone: ${phone || 'Not provided'}
${email ? `Email: ${email}` : ''}
${subject ? `Subject: ${subject}` : ''}

Message:
${message || 'No message provided'}

Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryMessage.trim())}`;
}

export function openWhatsApp(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}
