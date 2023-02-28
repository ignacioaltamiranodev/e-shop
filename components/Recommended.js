import { products } from '@/data/data';
import Product from './Product';

const Recommended = () => {
  return (
    <section className="container mb-4">
      <h2 className="display-6 primary-text mb-4">Recommended For You</h2>
      <div className="grid">
        {products.slice(12, 16).map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
