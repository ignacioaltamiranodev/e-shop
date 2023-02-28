import { products } from '@/data/data';
import React from 'react';
import Link from 'next/link';
import Product from './Product';

const BestSellers = () => {
  return (
    <section className="container mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="display-6 primary-text">Best Sellers</h2>
        <Link className="btn" href="/products">
          View All
        </Link>
      </div>
      <div className="grid best-sellers mt-4">
        {products.slice(4, 12).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
