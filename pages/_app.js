import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import Router from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/authContext';
import { CartProvider } from '@/context/cartContext';
import { Roboto } from '@next/font/google';

const pageVariant = {
  pageInitial: { opacity: 0 },
  pageAnimate: { opacity: 1 },
};

const raleway = Roboto({ weight: '400', subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { ...pageProps },
  router,
}) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });

  return (
    <AuthProvider>
      <CartProvider>
        <motion.div
          className={raleway.className}
          key={router.router}
          initial="pageInitial"
          animate="pageAnimate"
          variants={pageVariant}
        >
          <Navbar />
          {loading ? <Loader /> : <Component {...pageProps} />}
          <Footer />
        </motion.div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="light"
        />
      </CartProvider>
    </AuthProvider>
  );
}
