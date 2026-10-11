import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Footer from './components/Footer';

function App() {
  // Step 2: products array (inside App, outside return)
  const products = [
    {
      id: 1,
      name: "Halo Zip Up - Black",
      price: 135,
      image: "https://placehold.co/600x600/1a1a1a/ffffff?text=Halo+Black",
      description: "Oversized heavyweight French terry with vintage acid wash and YKK brass hardware."
    },
    {
      id: 2,
      name: "Halo Zip Up - Brown",
      price: 135,
      image: "https://placehold.co/600x600/8b5a3c/ffffff?text=Halo+Brown",
      description: "Boxy silhouette with distressing and reverse stitching. Torn by grace."
    },
    {
      id: 3,
      name: "Halo Zip Up - Magenta",
      price: 135,
      image: "https://placehold.co/600x600/a3226e/ffffff?text=Halo+Magenta",
      description: "Structure paired with distress in a bold magenta wash."
    },
    {
      id: 4,
      name: "Halo Zip Up - Blue",
      price: 135,
      image: "https://placehold.co/600x600/3b4fd6/ffffff?text=Halo+Blue",
      description: "Vintage blue acid wash with raw, refined detailing."
    },
    {
      id: 5,
      name: "Halo Zip Up - Green",
      price: 135,
      image: "https://placehold.co/600x600/2fa84f/ffffff?text=Halo+Green",
      description: "Heavyweight terry in a washed green colorway with ring hardware."
    },
    {
      id: 6,
      name: "Saints Logo Tee",
      price: 45,
      image: "https://placehold.co/600x600/0a0a0a/ffffff?text=Logo+Tee",
      description: "Premium cotton tee with the circle DS logo on the chest."
    }
  ];

  // Step 3: cart state
  const [cart, setCart] = useState([]);

  // Step 4: add to cart (spread makes a new array)
  // cartId lets you add the same item twice and still remove just one
  const addToCart = (product) => {
    const cartItem = { ...product, cartId: Date.now() };
    setCart([...cart, cartItem]);
    console.log('Added to cart:', product.name);
  };

  // Step 11: remove from cart (filter makes a new array without that item)
  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  // Step 12: cart total with reduce
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      {/* Step 7: pass cart length to Header */}
      <Header storeName="Different Saints" cartCount={cart.length} />

      <Hero
        title="Different Saints"
        subtitle="Everyone carries something. Wear the proof."
        ctaText="Shop the Drop"
        image="https://placehold.co/1600x800/222222/888888?text=Hero+Image"
      />

      <main className="main-content">
        <h2 className="section-title">Halo Collection</h2>

        {/* Step 5: pass the product object and addToCart to each card */}
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Step 10: cart section */}
        <section className="cart-section">
          <h2 className="section-title">Your Cart</h2>

          {/* Step 13: conditional rendering for empty cart */}
          {cart.length > 0 ? (
            <div className="cart-list">
              {cart.map(item => (
                <CartItem
                  key={item.cartId}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}
              <div className="cart-total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)} USD</span>
              </div>
            </div>
          ) : (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <p className="cart-empty-sub">Add something from the Halo Collection to get started.</p>
            </div>
          )}
        </section>
      </main>

      <Footer
        storeName="Different Saints"
        email="support@differentsaints.com"
        year={2026}
      />
    </div>
  );
}

export default App;