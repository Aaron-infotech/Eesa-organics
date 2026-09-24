import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ProductCard from '../components/ProductCard';
import { ShoppingBag } from 'lucide-react';
import { CATEGORIES, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

export default function Products() {
  const { items, totalItems, totalPrice } = useCart();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <PageMeta
        title="Products"
        description="Browse Eesa Organics natural herbal products — hair care, body care, herbal tea, massage oils and more."
      />

      <section className="products-page">
        <div className="container">
          <SectionTitle
            align="left"
            title="Our Products"
            
          />

          <div className="products-toolbar">
            <div className="search-box">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
              />
            </div>

            <div className="category-filters" role="tablist" aria-label="Product categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  className={`category-filter ${category === cat ? 'category-filter--active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid product-grid--catalog">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} variant="catalog" />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No products found matching your search.</p>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => {
                  setSearch('');
                  setCategory('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      {totalItems > 0 && (
        <aside className="cart-summary" id="cart" aria-label="Shopping cart">
          <div className="cart-summary__items">
            <div className="cart-summary__icon"><ShoppingBag size={20} /></div>
            <div>
              <strong>{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</strong>
              <p>₹{totalPrice} total</p>
            </div>
          </div>
          <Link to="/cart" className="cart-summary__button">
            Go to Cart
          </Link>
        </aside>
      )}
    </>
  );
}
