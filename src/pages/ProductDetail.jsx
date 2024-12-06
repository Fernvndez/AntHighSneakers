import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';

const product = {
  name: 'Air Max Supreme',
  price: '$199.99',
  rating: 4.5,
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2',
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
  ],
  colors: [
    { name: 'Black', class: 'bg-black' },
    { name: 'White', class: 'bg-white' },
    { name: 'Red', class: 'bg-red-600' },
  ],
  sizes: ['6', '7', '8', '9', '10', '11', '12'],
  description: 'Premium comfort meets style in these innovative sneakers. Features advanced cushioning technology and breathable materials for all-day wear.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div>
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={mainImage}
                alt={product.name}
                className="h-full w-full object-cover object-center rounded-lg"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={classNames(
                    'aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg',
                    mainImage === image ? 'ring-2 ring-indigo-500' : ''
                  )}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-4">
              <p className="text-2xl font-semibold">{product.price}</p>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-600">{product.rating} out of 5 stars</p>
            </div>

            {/* Colors */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Color</h2>
              <div className="mt-4 flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={classNames(
                      color.class,
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                      selectedColor.name === color.name ? 'ring ring-offset-1' : ''
                    )}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span className="sr-only">{color.name}</span>
                    <span
                      className={classNames(
                        'h-8 w-8 rounded-full border border-black border-opacity-10',
                      )}
                 <boltAction type="file" filePath="src/pages/ProductDetail.jsx">                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Size</h2>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={classNames(
                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none',
                      selectedSize === size
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-gray-200 text-gray-900'
                    )}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <p className="mt-4 text-sm text-gray-600">{product.description}</p>
            </div>

            {/* Add to cart button */}
            <button
              type="button"
              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}