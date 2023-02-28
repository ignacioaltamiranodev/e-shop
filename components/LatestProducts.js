import { gridInfo, products } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import Product from './Product';

const LatestProducts = () => {
  return (
    <>
      <section className="container">
        <h2 className="display-6 mb-4 primary-text">Latest Products</h2>
        <div className="grid">
          {products.slice(0, 4).map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="container row mx-auto mt-4">
        {gridInfo.map((item) => (
          <article key={item.id} className="col-md-4 p-1">
            <Link href={`/product/${item.id}`}>
              <div className="content">
                <div class="content-overlay"></div>
                <Image
                  width={300}
                  height={300}
                  src={item?.img}
                  alt={item.text}
                />
                <div className="text-container">
                  <span className="fs-4 fw-bold mb-3 d-block">{item.text}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default LatestProducts;
