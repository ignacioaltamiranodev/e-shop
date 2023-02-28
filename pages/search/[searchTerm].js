import NoResults from '@/components/NoResults';
import Product from '@/components/Product';
import { products } from '@/data/data';
import { useRouter } from 'next/router';
import React from 'react';

const SearchPage = () => {
  const { query, back } = useRouter();
  const searchTerm = query.searchTerm;
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  return (
    <main className="container">
      <button className="btn mt-4" onClick={() => back()}>
        Go Back
      </button>
      <div className="grid my-4">
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      {filteredProducts.length === 0 && <NoResults term={searchTerm} />}
    </main>
  );
};

export default SearchPage;
