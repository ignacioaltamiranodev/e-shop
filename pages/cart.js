import Link from 'next/link';
import { motion } from 'framer-motion';
import CheckoutProduct from '@/components/CheckoutProduct';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '@/context/authContext';
import { useCart } from '@/context/cartContext';

const Cart = () => {
  const { items, clearCart, total } = useCart();
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
    <main className="container">
      <div className="d-flex align-items-center justify-content-between my-4">
        <h2>Shopping Cart</h2>
        <Link className="btn" href="/">
          Go Back
        </Link>
      </div>
      <section className="row border-top mb-4">
        <div className="col-md-9">
          {items?.length === 0 && (
            <>
              <h4 className="my-3">There are no items in your cart.</h4>
              <Link className="btn" href="/products">
                Go Shopping
              </Link>
            </>
          )}
          {items?.length >= 1 &&
            items?.map((item) => (
              <CheckoutProduct key={item.id} product={item} />
            ))}
        </div>
        {items?.length >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-md-3 mb-3"
          >
            <p className="my-3">
              Subtotal ({items?.length} items) :<b>${total?.toFixed(2)}</b>
            </p>
            <button onClick={clearCartItems} className="btn d-block mb-3">
              Clear Cart
            </button>
            {user ? (
              <button className="btn" onClick={createCheckoutSession}>
                Procced to Checkout
              </button>
            ) : (
              <Link className="btn black-bg me-3" href="/login">
                Log in to proceed
              </Link>
            )}
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Cart;
