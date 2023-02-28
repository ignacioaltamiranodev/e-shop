import NoResults from '@/components/NoResults';
import Product from '@/components/Product';
import { useCart } from '@/context/cartContext';
import { products } from '@/data/data';
import Link from 'next/link';
import React, { useState } from 'react';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedData, setSortedData] = useState(products);
  const { addItemToCart } = useCart();

  const addToCart = (item) => {
    addItemToCart(item);
  };

  const filteredProducts = sortedData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const handleSelectChange = (e) => {
    const direction = e.target.value;

    if (direction === 'asc' || direction === 'desc') {
      const sortedArray = sortedData.sort((a, b) => {
        return direction === 'asc' ? a.price - b.price : b.price - a.price;
      });
      setSortedData([...sortedArray]);
    } else {
      const sortedArray = sortedData.sort((a, b) => {
        return a.id - b.id;
      });
      setSortedData([...sortedArray]);
    }
  };

  return (
    <main className="container my-4">
      <section className="d-flex align-items-center justify-content-between flex-column flex-md-row">
        <Link className="btn mb-3 mb-md-0" href="/">
          Go Back
        </Link>
        <input
          className="w-50 mb-3 mb-md-0"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <span className="fs-5 me-3">Sort by</span>
          <select className="p-1" onChange={handleSelectChange}>
            <option value="default">Default</option>
            <option value="asc">Price (low)</option>
            <option value="desc">Price (high)</option>
          </select>
        </div>
      </section>
      <section className="grid  mt-4">
        {searchTerm !== ''
          ? filteredProducts.map((item) => (
              <Product product={item} key={item.id} />
            ))
          : sortedData.map((item) => <Product product={item} key={item?.id} />)}
        {filteredProducts.length === 0 && <NoResults term={searchTerm} />}
      </section>
    </main>
  );
};

export default ProductsPage;
