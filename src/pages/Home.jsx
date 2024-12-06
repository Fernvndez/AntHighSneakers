import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featuredProducts = [
  {
    id: 1,
    name: 'Air Max Supreme',
    price: '$199.99',
    imageSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    id: 2,
    name: 'Runner Elite',
    price: '$159.99',
    imageSrc: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2',
  },
  {
    id: 3,
    name: 'Street Legend',
    price: '$179.99',
    imageSrc: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
  },
  // Add more products as needed
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <Slider {...sliderSettings}>
          <div>
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c"
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">New Collection</h1>
                    <p className="text-xl mb-8">Discover the latest trends in sneakers</p>
                    <Link
                      to="/products"
                      className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slider items as needed */}
        </Slider>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/men" className="relative group">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src="https://images.unsplash.com/photo-1527010154944-f2241763d806"
                  alt="Men's"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="h-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Men's</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/women" className="relative group">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src="https://images.unsplash.com/photo-1527010154944-f2241763d806"
                  alt="Women's"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="h-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Women's</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/kids" className="relative group">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src="https://images.unsplash.com/photo-1527010154944-f2241763d806"
                  alt="Kids'"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="h-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Kids'</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}