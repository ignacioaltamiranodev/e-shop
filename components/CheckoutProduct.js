import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCart } from '@/context/cartContext';
import { BiTrash } from 'react-icons/bi';

const CheckoutProduct = ({ product }) => {
  const {
    removeItemFromCart,
    increaseItemQty,
    decreaseItemQty,
    setShowModal,
  } = useCart();
  const { id, img, title, price, qty } = product;

  const removeItem = (product) => {
    removeItemFromCart(product);
  };

  const increaseQty = (product) => {
    increaseItemQty(product);
  };

  const decreaseQty = (product) => {
    decreaseItemQty(product);
  };

  return (
    <article className="row m-0 p-3 border-top border-bottom g-info">
      <div className="col-4 d-flex justify-content-center align-items-center flex-column p-0">
        <Link href={`/product/${id}`} onClick={() => setShowModal(false)}>
          <Image role="button" src={img} alt={title} width={120} height={120} />
        </Link>
      </div>
      <div className="col-5">
        <div className="row">
          <Link
            className="text-black mb-2 fs-6 fw-bold"
            href={`/product/${id}`}
            onClick={() => setShowModal(false)}
          >
            {title}
          </Link>
          <span className="fw-bold">${price}</span>
        </div>
      </div>
      <div className="col-3 d-flex justify-content-between align-items-center flex-column">
        <BiTrash className="icon fs-5" onClick={() => removeItem(product)} />

        <div className="d-flex align-items-center">
          <AiOutlinePlus
            className="icon"
            onClick={() => increaseQty(product)}
          />
          <p className="mx-2">{qty}</p>
          <AiOutlineMinus
            className="icon"
            onClick={() => decreaseQty(product)}
          />
        </div>
      </div>
    </article>
  );
};

export default CheckoutProduct;
