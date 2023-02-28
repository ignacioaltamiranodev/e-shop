import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CanceledPage = () => {
  return (
    <main className="cancel-wrapper container">
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: 'spring',
          bounce: 0.4,
        }}
        className="cancel"
      >
        <i className="cancel-icon">
          <AiOutlineCloseCircle />
        </i>
        <h4>Something went wrong.</h4>
        <h4>Your payment wasn´t completed.</h4>
        <Link className="btn mt-3" href="/cart">
          Please Try Again
        </Link>
      </motion.div>
    </main>
  );
};

export default CanceledPage;
