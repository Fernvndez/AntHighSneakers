import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Air Max Supreme',
    price: '$199.99',
    imageSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    category: 'Running',
  },
  // Add more products
];

const filters = {
  category: ['Running', 'Basketball', 'Lifestyle', 'Training'],
  size: ['6', '7', '8', '9', '10', '11', '12'],
  color: ['Black', 'White', 'Red', 'Blue', 'Green'],
};

export default function Products() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    size: [],
    color: [],
  });

  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-4 gap-8">
          {/* Filters */}
          <div className="col-span-1">
            <div className="space-y-8">
              {Object.entries(filters).map(([filterType, options]) => (
                <div key={filterType}>
                  <h3 className="text-lg font-semibold capitalize mb-4">{filterType}</h3>
                  <div className="space-y-2">
                    {options.map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters[filterType].includes(option)}
                          onChange={() => toggleFilter(filterType, option)}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
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
        </div>
      </div>
    </div>
  );
}