import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import {
  initializeDatabase,
  queryProducts,
  getWishlist,
  addToWishlist,
  removeFromWishlist
} from './sqliteDb';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortBy, setSortBy] = useState('RECOMMENDED');
  const [loading, setLoading] = useState(true);
  const [userSession, setUserSession] = useState('');

  useEffect(() => {
    const initApp = async () => {
      try {
        let session = localStorage.getItem('userSession');
        if (!session) {
          session = 'user_' + Math.random().toString(36).substring(7);
          localStorage.setItem('userSession', session);
        }
        setUserSession(session);

        await initializeDatabase();
        fetchProducts();
        fetchWishlist(session);
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        setLoading(false);
      }
    };

    initApp();
  }, []);

  const fetchProducts = () => {
    try {
      const data = queryProducts();
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchWishlist = (session) => {
    try {
      const data = getWishlist(session);
      setWishlist(data || []);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const toggleWishlist = (productId) => {
    const isInWishlist = wishlist.includes(productId);

    try {
      if (isInWishlist) {
        removeFromWishlist(productId, userSession);
        setWishlist(prev => prev.filter(id => id !== productId));
      } else {
        addToWishlist(productId, userSession);
        setWishlist(prev => [...prev, productId]);
      }
    } catch (error) {
      console.error('Error toggling wishlist:', error);
    }
  };

  const toggleFilters = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        <div className="products-section">
          <div className="products-header">
            <div className="products-count">
              <span className="count">{products.length} ITEMS</span>
              <button className="filter-toggle" onClick={toggleFilters}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="12 6 8 10 4 6"/>
                </svg>
                <span>{isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
              </button>
            </div>

            <div className="products-sort">
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="RECOMMENDED">RECOMMENDED</option>
                <option value="NEWEST">NEWEST FIRST</option>
                <option value="POPULAR">POPULAR</option>
                <option value="PRICE_HIGH">PRICE: HIGH TO LOW</option>
                <option value="PRICE_LOW">PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </div>

          <div className="products-container">
            <Filters isVisible={isFilterVisible} />

            <div className="products-grid">
              {loading ? (
                <div className="loading">Loading products...</div>
              ) : products.length === 0 ? (
                <div className="no-products">No products found</div>
              ) : (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onToggleWishlist={toggleWishlist}
                    isInWishlist={wishlist.includes(product.id)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
