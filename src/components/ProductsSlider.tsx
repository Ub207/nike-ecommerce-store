import Image from "next/image";

export default function AirMaxSlider() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹ 13,995",
      image: "/s-1.png", // Add this image in public folder
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      category: "Men's Shoes",
      price: "₹ 13,995",
      image: "/s-2.png", // Add this image in public folder
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      category: "Men's Shoes",
      price: "₹ 16,995",
      image: "/s-3.png", // Add this image in public folder
    },
  ];

  return (
    <div className="slider">
      <h2>Best of Air Max</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              layout="responsive"
            />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
