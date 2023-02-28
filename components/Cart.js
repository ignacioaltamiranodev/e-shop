import { useAuth } from '@/context/authContext';
import { useCart } from '@/context/cartContext';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import CheckoutProduct from './CheckoutProduct';

const Cart = () => {
  const { items, setShowModal, total, clearCart } = useCart();
  const { user } = useAuth();

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    if (items.length === 0) {
      toast.error('Your cart is empty.');
      return;
    }

    const res = await axios.post(`/api/checkout_session`, {
      items,
      email: user?.email,
    });

    if (res.statusCode === 500) return;

    toast.loading('Redirecting...');

    const data = await res.data;

    stripe.redirectToCheckout({ sessionId: data.id });

    clearCart();
  };

  const clearCartItems = () => {
    clearCart();
  };

  return (
    <div
      className="cart-wrapper"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <aside
        className="cart-container d-flex flex-column"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="cart-top border-top border-bottom d-flex align-items-center justify-content-between p-4">
          <span>
            Your Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
          </span>
          <MdClose className="icon fs-4" onClick={() => setShowModal(false)} />
        </div>
        <div className="cart-content">
          {items.length === 0 ? (
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <i className="display-1">
                <AiOutlineShopping />
              </i>
              <span>Your cart is empty.</span>
              <Link
                className="text-black text-decoration-underline"
                href="/products"
                onClick={() => setShowModal(false)}
              >
                View Products
              </Link>
            </div>
          ) : (
            items?.length >= 1 &&
            items?.map((item) => (
              <CheckoutProduct key={item.id} product={item} />
            ))
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center mx-4">
          <span>
            Subtotal: <b>${total?.toFixed(2)}</b>
          </span>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between my-4 mx-4">
            {user && items.length >= 1 ? (
              <>
                <button onClick={clearCartItems} className="btn">
                  Clear Cart
                </button>
                <button className="btn" onClick={createCheckoutSession}>
                  Procced to Checkout
                </button>
              </>
            ) : (
              <>
                <button onClick={clearCartItems} className="btn">
                  Clear Cart
                </button>
                {!user && (
                  <Link
                    className="btn black-bg me-3"
                    href="/login"
                    onClick={() => setShowModal(false)}
                  >
                    Log in to proceed
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
