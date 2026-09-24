export const CATEGORIES = [
  'All',
  'Hair Care',
  'Body Care',
  'Herbal Tea',
  'Massage Oils',
  'Other Herbal Products',
];

const productImage = (slug) => `/products/${slug}.png`;

export const products = [
  {
    id: 'body-cooling-oil',
    name: 'Body Cooling Oil',
    slug: 'body-cooling-oil',
    category: 'Body Care',
    price: 249,
    originalPrice: 299,
    size: '100ml',
    shortDescription: 'A refreshing herbal oil blend to soothe and cool the body naturally.',
    description:
      'Our Body Cooling Oil is crafted with carefully selected herbs known in traditional wellness practices. Light and fast-absorbing, it helps you feel refreshed after a long day.',
    ingredients: 'Coconut oil, mint extract, camphor, eucalyptus, and traditional herbal extracts.',
    usage: 'Apply a small amount to desired areas and massage gently until absorbed. Use as needed.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    images: [productImage('body-cooling-oil')],
    featured: true,
  },
  {
    id: 'eesa-herbal-tea',
    name: 'Eesa Herbal Tea',
    slug: 'eesa-herbal-tea',
    category: 'Herbal Tea',
    price: 199,
    originalPrice: null,
    size: '50g',
    shortDescription: 'A soothing blend of pure herbs for everyday wellness and relaxation.',
    description:
      'Eesa Herbal Tea combines time-honoured botanical ingredients in a balanced blend. Enjoy a warm cup as part of your daily self-care routine.',
    ingredients: 'Tulsi, lemongrass, ginger, cinnamon, and selected dried herbs.',
    usage: 'Steep one teaspoon in hot water for 5–7 minutes. Strain and enjoy warm.',
    storage: 'Keep in an airtight container in a cool, dry place.',
    images: [productImage('eesa-herbal-tea')],
    featured: true,
  },
  {
    id: 'lemongrass-hair-oil',
    name: 'Lemongrass Hair Oil',
    slug: 'lemongrass-hair-oil',
    category: 'Hair Care',
    price: 349,
    originalPrice: 399,
    size: '120ml',
    shortDescription: 'Nourishing hair oil infused with lemongrass and herbal extracts.',
    description:
      'Lemongrass Hair Oil is formulated to nourish the scalp and hair with natural ingredients. Regular massage with this oil supports healthy-looking hair as part of your hair care routine.',
    ingredients: 'Coconut oil, lemongrass extract, amla, bhringraj, and herbal oils.',
    usage: 'Warm a small amount between palms. Massage into scalp and hair. Leave for 30 minutes before washing.',
    storage: 'Store at room temperature away from heat and moisture.',
    images: [productImage('lemongrass-hair-oil')],
    featured: true,
  },
  {
    id: 'oil-massage',
    name: 'Oil Massage Blend',
    slug: 'oil-massage',
    category: 'Massage Oils',
    price: 299,
    originalPrice: null,
    size: '150ml',
    shortDescription: 'A traditional massage oil blend for relaxing body massage.',
    description:
      'Our Oil Massage Blend combines nourishing carrier oils with aromatic herbs used in traditional massage practices. Ideal for self-massage or professional use.',
    ingredients: 'Sesame oil, almond oil, lavender, rosemary, and herbal extracts.',
    usage: 'Warm slightly and apply generously. Massage in circular motions on body.',
    storage: 'Keep sealed and store in a cool place.',
    images: [productImage('oil-massage')],
    featured: true,
  },
  {
    id: 'herbal-bath-powder',
    name: 'Herbal Bath Powder',
    slug: 'herbal-bath-powder',
    category: 'Body Care',
    price: 179,
    originalPrice: 219,
    size: '100g',
    shortDescription: 'Traditional herbal bath powder for gentle daily cleansing.',
    description:
      'Made from finely ground herbs and natural ingredients, this bath powder offers a gentle alternative to conventional soaps.',
    ingredients: 'Green gram, turmeric, neem, sandalwood, and herbal powders.',
    usage: 'Mix with water to form a paste. Apply to skin and rinse thoroughly.',
    storage: 'Store in a dry, airtight container.',
    images: [productImage('herbal-bath-powder')],
    featured: false,
  },
  {
    id: 'herbal-face-pack',
    name: 'Herbal Face Pack',
    slug: 'herbal-face-pack',
    category: 'Other Herbal Products',
    price: 229,
    originalPrice: null,
    size: '75g',
    shortDescription: 'A natural face pack with herbs for radiant-looking skin.',
    description:
      'This herbal face pack combines botanical ingredients traditionally used in skincare. Apply weekly as part of your natural beauty routine.',
    ingredients: 'Multani mitti, rose powder, turmeric, sandalwood, and herbal extracts.',
    usage: 'Mix with rose water or plain water. Apply evenly, leave for 15 minutes, and rinse.',
    storage: 'Keep away from moisture. Use within 6 months of opening.',
    images: [productImage('herbal-face-pack')],
    featured: false,
  },
  {
    id: 'joint-care-oil',
    name: 'Joint Care Herbal Oil',
    slug: 'joint-care-oil',
    category: 'Massage Oils',
    price: 279,
    originalPrice: 329,
    size: '100ml',
    shortDescription: 'Warming herbal oil for massage and everyday joint comfort.',
    description:
      'Joint Care Herbal Oil is blended with warming herbs traditionally used in massage. Apply with gentle massage for a comforting experience.',
    ingredients: 'Mustard oil, eucalyptus, camphor, wintergreen, and herbal extracts.',
    usage: 'Apply to affected areas and massage gently. Use 1–2 times daily as needed.',
    storage: 'Store in a cool, dry place.',
    images: [productImage('joint-care-oil')],
    featured: false,
  },
  {
    id: 'digestive-herbal-tea',
    name: 'Digestive Herbal Tea',
    slug: 'digestive-herbal-tea',
    category: 'Herbal Tea',
    price: 189,
    originalPrice: null,
    size: '50g',
    shortDescription: 'A gentle herbal tea blend to support digestion after meals.',
    description:
      'Digestive Herbal Tea features herbs traditionally enjoyed after meals. A comforting cup to include in your daily wellness routine.',
    ingredients: 'Fennel, cumin, coriander, ginger, and peppermint.',
    usage: 'Steep one teaspoon in hot water for 5 minutes. Drink after meals.',
    storage: 'Store in an airtight container away from moisture.',
    images: [productImage('digestive-herbal-tea')],
    featured: false,
  },
];

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
