import React from "react";
import { Carousel } from "react-bootstrap";
import shop1 from "../images/shopping14-2.jpeg"; // First slide image
import shop2 from "../images/shopping13-2.png"; // Second slide image
import shop3 from "../images/shopping2.jpg"; // Third slide image

const HeroSection = () => {
  return (
    <div className="carousel-container">
      {/* React Bootstrap Carousel */}
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <div
            className="relative bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${shop1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "80vh",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
              <h1 className="slide1 text-5xl font-bold mb-4 animate-fade-in">
                Shop the Trendiest Deals!
              </h1>
              <p className="text-lg mb-6 max-w-2xl">
                Discover exciting offers every day and stay ahead in style. Your
                dream products are just a click away.
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 transition">
                  Shop Now
                </button>
                <button className="border border-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition">
                  Explore Categories
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div
            className="relative bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${shop2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "80vh",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                Deals That Match Your Style!
              </h1>
              <p className="text-lg mb-6 max-w-2xl">
                Don't miss out on exclusive offers. Upgrade your wardrobe today!
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 transition">
                  Start Shopping
                </button>
                <button className="border border-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition">
                  View All Deals
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div
            className="relative bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${shop3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "80vh",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                Unbeatable Discounts!
              </h1>
              <p className="text-lg mb-6 max-w-2xl">
                Grab your favorites before they're gone. The best deals await
                you!
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 transition">
                  Shop Now
                </button>
                <button className="border border-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition">
                  Check Out Deals
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
