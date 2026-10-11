import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header storeName="Different Saints" />

      <Hero
        title="Different Saints"
        subtitle="Everyone carries something. Wear the proof."
        ctaText="Shop the Drop"
        image="https://placehold.co/1600x800/222222/888888?text=Hero+Image"
      />

      <main className="main-content">
        <h2 className="section-title">Halo Collection</h2>
        <div className="product-grid">
          <ProductCard
            name="Halo Zip Up - Black"
            price={135}
            image="https://placehold.co/600x600/1a1a1a/ffffff?text=Halo+Black"
            description="Oversized heavyweight French terry with vintage acid wash and YKK brass hardware."
          />
          <ProductCard
            name="Halo Zip Up - Brown"
            price={135}
            image="https://placehold.co/600x600/8b5a3c/ffffff?text=Halo+Brown"
            description="Boxy silhouette with distressing and reverse stitching. Torn by grace."
          />
          <ProductCard
            name="Halo Zip Up - Violet"
            price={135}
            image="https://placehold.co/600x600/5b4bd6/ffffff?text=Halo+Violet"
            description="Structure paired with distress. Vintage wash in a bold violet colorway."
          />
        </div>
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