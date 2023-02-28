import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cartContext';

const Product = ({ product, slider }) => {
  const { addItemToCart } = useCart();

  const addToCart = (item) => {
    addItemToCart(item);
  };

  return (
    <article
      className="d-flex flex-column align-items-center justify-content-center rounded mx-auto"
      key={product?.id}
    >
      <Link href={`/product/${product?.id}`}>
        <div
          className="d-flex flex-column align-items-center justify-content-center bg-light"
          style={{ height: '300px', width: '300px' }}
        >
          <Image
            src={product?.img}
            alt={product?.title}
            width={250}
            height={250}
          />
        </div>
      </Link>
      <div
        className={
          !slider
            ? 'd-flex align-items-center justify-content-between w-100'
            : 'd-flex align-items-center justify-content-between flex-column'
        }
      >
        <Link
          className="fw-bold text-black my-3"
          href={`/product/${product?.id}`}
        >
          {product?.title}
        </Link>
        <span>&#36;{product?.price}.00</span>
      </div>
      {!slider && (
        <button
          className="btn align-self-start"
          onClick={() => addToCart(product)}
        >
          Buy Now
        </button>
      )}
    </article>
  );
};

export default Product;
