import { useState, useEffect } from 'react';

function ProductCard({ product, onToggleWishlist, isInWishlist }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.is_new && (
          <span className="product-badge badge-new">NEW PRODUCT</span>
        )}
        {product.is_out_of_stock && (
          <span className="product-badge badge-out-of-stock">OUT OF STOCK</span>
        )}
        <img
          src={product.image_url}
          alt={product.name}
          className={`product-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <div className="product-pricing">
            <a href="#signin" className="signin-link">Sign in</a>
            <span className="pricing-text"> or Create an account to see pricing</span>
          </div>
          <button
            className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
            onClick={() => onToggleWishlist(product.id)}
            aria-label="Add to wishlist"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
