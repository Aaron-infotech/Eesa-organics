import { WHATSAPP_NUMBER } from '../config/contact';

export function buildWhatsAppOrderUrl({ productName, quantity = 1, price, size }) {
  if (!productName) return `https://wa.me/${WHATSAPP_NUMBER}`;

  const safeQuantity = Math.max(1, Number(quantity) || 1);
  const priceLine = price != null ? `Price: ₹${price}` : '';
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
    .map((item) => `- ${item.name} x ${item.quantity} (${item.size}) - ₹${item.price * item.quantity}`)
    .join('\n');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = `Hello Eesa Organics,\n\nI would like to order:\n${lines}\n\nTotal: ₹${total}\n\nPlease share availability and delivery details.\n\nThank you!`;
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
