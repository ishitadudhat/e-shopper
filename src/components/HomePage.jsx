import React from "react";
import '../styles/HomePage.css';
  
import img1 from "../images/shoes.webp";
import img2 from "../images/watch.webp";
import img3 from "../images/glasses.webp";
import img4 from "../images/bag2.jpg";
import img5 from "../images/tshirt4.jpg";
import img6 from "../images/dress.webp";

const featuredProducts = [
  {
    id: 1,
    name: "Stylish Shoes",
    price: "₹3,999",
    image: img1,
  },
  {
    id: 2,
    name: "Classic Watch",
    price: "₹6,799",
    image: img2,
  },
  {
    id: 3,
    name: "Cool Sunglasses",
    price: "₹1,599",
    image: img3,
  },
  {
    id: 4,
    name: "Trendy Backpack",
    price: "₹2,199",
    image: img4,
  },
  {
    id: 5,
    name: "Casual T-Shirt",
    price: "₹899",
    image: img5,
  },
  {
    id: 6,
    name: "Elegant Dress",
    price: "₹5,499",
    image: img6,
  },
];

const HomePage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-3xl font-bold mb-5">
        Featured Products
      </h2>
      <div className="row gy-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top rounded-top transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-xl font-semibold">
                  {product.name}
                </h5>
                <p className="card-text text-lg text-gray-600">{product.price}</p>
                <button className="btn btn-warning w-100 font-semibold text-black hover:bg-yellow-500 transform hover:scale-110 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
