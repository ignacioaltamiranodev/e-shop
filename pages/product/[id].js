import { products } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useCart } from '@/context/cartContext';
import Product from '@/components/Product';

const ProductPage = () => {
  const { query } = useRouter();
  const { items, addItemToCart, removeItemFromCart } = useCart();

  const product = products.find((item) => item.id.toString() === query.id);
  const similarProducts = products?.filter(
    (product) => product?.id.toString() !== query.id
  );
  const inCart = items.find((item) => item.id === query.id);

  const addToCart = (item) => {
    addItemToCart(item);
  };

  const removeFromCart = (item) => {
    removeItemFromCart(item);
  };

  return (
    <main>
      <div className="container">
        <Link className="btn mt-4" href="/">
          Go Back
        </Link>
      </div>
      <section className="container product mt-4 row mx-auto">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Image
            src={product?.img}
            alt={product?.title}
            height={450}
            width={450}
          />
        </div>
        <div className="col-md-6 mt-3 mt-md-0 d-flex flex-column align-items-start justify-content-center p-0">
          <h2 className="mb-3">{product?.title}</h2>
          <span className="fs-4">
            Price: <b> ${product?.price}</b>
          </span>
          <p className="text-capitalize mt-3">{product?.description}</p>
          {inCart ? (
            <button
              className="btn sales mt-3 align-self-center me-auto"
              onClick={() => removeFromCart(product)}
            >
              Remove from cart
            </button>
          ) : (
            <button
              className="btn sales mt-3 align-self-center me-auto"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          )}
        </div>
      </section>
      <section className="container my-4">
        <h2 className="mb-4 container">You may also like</h2>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop={true}
          autoplay={{ delay: 4000 }}
        >
          {similarProducts.slice(0, 6).map((product) => (
            <SwiperSlide key={product?.id}>
              <Product key={product.id} product={product} slider />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default ProductPage;
