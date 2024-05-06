
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
  const data = useLoaderData();
  const allProduct = data.products;

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = allProduct.filter(product =>
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredProducts)

  return (
    <div className='flex flex-wrap justify-between container max-w-screen-xl mx-auto'>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 mb-4 border border-gray-800 rounded-md mt-4"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {filteredProducts.map((product, i) => (
        <div key={i} className="w-[32%] p-4 mt-3 mb-4 border border-gray-800 rounded-md">
          <h1 className="text-xl text-black font-medium">Brand: {product.brand}</h1>
          <h1 className="text-xl text-black font-medium">Category: {product.category}</h1>
          <h1 className="text-xl text-black font-medium">Price: {product.price}</h1>
          <Link to={`/detailes/${product.id}`} className="py-1 px-7 block w-full bg-gray-700 text-white font-semibold rounded-md text-center mt-3">Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Services;


