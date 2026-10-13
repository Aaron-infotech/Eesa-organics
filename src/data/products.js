export const CATEGORIES = [
  'All',
  'Herbal Health Care',
  'Beauty & Wellness',
  'De-addiction',
  'Pain Relief',
  'Weight Management',
  'Traditional Products',
];

const productImage = (filename) => `/product%20images/${encodeURIComponent(filename)}`;

const catalog = [
  ['Asthalex Capsule', 'Asthalex Capsule.png', 'Herbal Health Care', '40 capsules', 440],
  ['Breast Reduce Oil', 'Breast Reduce Oil.png', 'Beauty & Wellness', '225 ml', 1270],
  ['Dama Buti Churna', 'Dama Buti Churna.png', 'Herbal Health Care', '135 g', 680],
  ['Dr. Relaxi Oil', 'Dr. Relaxi Oil.png', 'Pain Relief', '100 ml', 320],
  ['Fat 2 Fit Weight Loss Juice', 'Fat 2 Fit.png', 'Weight Management', '850 ml', 925],
  ['Dr. Relaxi Capsule', 'Gemini_Generated_Image_soyuzlsoyuzlsoyu.png', 'Pain Relief', '40 capsules', 490],
  ['Herbal Body Cooling Oil', 'Herbal Body Cooling Oil.png', 'Beauty & Wellness', '225 ml', 600],
  ['Moodon Ayurvedic Capsule', 'Moodon Ayurvedic Capsule.png', 'Herbal Health Care', '15 capsules', 750],
  ['Pain Niwaran Churna', 'Pain Niwaran Churna.png', 'Pain Relief', '1 pack', 680],
  ['Rubia Capsule', 'Rubia Capsule.png', 'Beauty & Wellness', '60 capsules', 410],
  ['Rumon Tablet', 'Rumon Tablet.png', 'Pain Relief', '84 tablets', 425],
  ['Sugagen Capsule', 'Sugagen Capsule.png', 'Herbal Health Care', '30 capsules', 480],
  ['Surari Churna', 'Surari Churna (De-Addiction).png', 'De-addiction', '1 pouch', 1240],
  ['Surari Silver Churna', 'Surari Silver Churna.png', 'De-addiction', '105 g · 30 sachets', 2400],
  ['Thyrover Capsule', 'Thyrover Capsule.png', 'Herbal Health Care', '30 capsules', 480],
  ['Weight Gain Churna', 'Weight Gain Churna.png', 'Weight Management', '1 pouch', 1150],
  ['Weight Loss Powder', 'Weight Loss Powder.png', 'Weight Management', '100 g', 750],
  ['ஆந்தை விளக்கு', 'ஆந்தை விளக்கு.png', 'Traditional Products', '1 pc', 2999],
  ['உடனடி சாம்பிராணி கப்', 'உடனடி சாம்பிராணி கப்.png', 'Traditional Products', '1 pack', 300],
  ['கண் திருஷ்டி கப் சாம்பிராணி', 'கண் திருஷ்டி கப் சாம்பிராணி.png', 'Traditional Products', '25 pcs', 200],
  ['சாம்பிராணி Cup', 'சாம்பிராணி Cup.png', 'Traditional Products', '48 pc', 350],
  ['சுர குடுவை', 'சுர குடுவை.png', 'Traditional Products', '1 pc', 850],
  ['தலைவலி தைலம்', 'தலைவலி தைலம்.png', 'Pain Relief', '1 bottle', 120],
  ['பஞ்சகாவிய விளக்கு', 'பஞ்சகாவிய விளக்கு.png', 'Traditional Products', '1 pack', 499],
  ['முடக்கத்தான் தைலம்', 'முடக்கத்தான் தைலம்.png', 'Pain Relief', '1 bottle', 350],
  ['முடவாட்டு கிழங்கு தைலம்', 'முடவாட்டு கிழங்கு தைலம்.png', 'Pain Relief', '1 bottle', 350],
  ['வாத கேசரி தைலம்', 'வாத கேசரி தைலம்.png', 'Pain Relief', '1 bottle', 350],
  ['மெகா சாம்பிராணி', 'மெகா சாம்பிராணி.png', 'Traditional Products', '1 pc', 400],
  ['லெமன் கிராஸ் ஹேர் ஆயில்', 'லெமன் கிராஸ் ஹேர் ஆயில்.png', 'Beauty & Wellness', '1 bottle', 600],
];

export const products = catalog.map(([name, filename, category, size, price], index) => {
  const slug = `product-${index + 1}`;

  return {
    id: slug,
    name,
    slug,
    category,
    price,
    originalPrice: null,
    size,
    shortDescription: `${size} · Sample price for display only.`,
    description: `${size}. Sample price shown for display only; confirm actual price and pack details before ordering.`,
    ingredients: '',
    usage: '',
    storage: '',
    images: [productImage(filename)],
    featured: index < 8,
  };
});

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category) {
  if (!category || category === 'All') return products;
  return products.filter((p) => p.category === category);
}
