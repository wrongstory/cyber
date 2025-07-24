import { useEffect, useState } from "react";
import { fetchProductById } from "../api/api";

export default function Banner() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(100).then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <div className="bg-gray-200 animate-pulse h-[400px]"></div>;
  }

  return (
    <section
      className="text-white py-16 px-10 flex justify-between items-center"
      style={{
        backgroundImage: "linear-gradient(to right, #000428, #004e92)",
      }}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Pro.Beyond.</h2>
        <h1 className="text-5xl font-light">
          {product.title.split(" ")[0]} {product.title.split(" ")[1]}{" "}
          <span className="font-bold">Pro</span>
        </h1>
        <p className="text-gray-200">{product.description}</p>
        <button className="border px-6 py-2 rounded hover:bg-white hover:text-black transition duration-200">
          Shop Now
        </button>
      </div>
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-80 object-contain"
      />
    </section>
  );
}
