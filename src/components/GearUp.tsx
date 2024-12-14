import Image from 'next/image';

export default function GearUp() {
  return (
    <section className="gear-up ">
      <h2>Gear Up</h2>
      <div className="shop-section">
        {/* Men's Section */}
        <div className="section-header">
          <h3>Shop Men's</h3>
          <div className="navigation">
            <button className="nav-btn">&lt;</button>
            <button className="nav-btn">&gt;</button>
          </div>
        </div>
        <div className="products flex">
          <div className="product-card">
            <Image src="/g-1.png" alt="Men's Shirt" width={200} height={300} />
            <h4>Nike Dri-FIT ADV TechKnit Ultra</h4>
            <p>₹ 3 895</p>
            <p>Men's Short-Sleeve Running Top</p>
          </div>
          <div className="product-card">
            <Image src="/g-2.png" alt="Men's Shorts" width={200} height={300} />
            <h4>Nike Dri-FIT Challenger</h4>
            <p>₹ 2 495</p>
            <p>Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
          </div>
        </div>

        {/* Women's Section */}
        <div className="section-header">
          <h3>Shop Women's</h3>
          <div className="navigation">
            <button className="nav-btn">&lt;</button>
            <button className="nav-btn">&gt;</button>
          </div>
        </div>
        <div className="products">
          <div className="product-card">
            <Image src="/g-3.png" alt="Women's Top" width={200} height={300} />
            <h4>Nike Dri-FIT ADV Run Division</h4>
            <p>₹ 5 295</p>
            <p>Women's Long-Sleeve Running Top</p>
          </div>
          <div className="product-card">
            <Image src="/g-4.png" alt="Women's Leggings" width={200} height={300} />
            <h4>Nike Fast</h4>
            <p>₹ 3 795</p>
            <p>Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
          </div>
        </div>
      </div>
    </section>
  );
}
