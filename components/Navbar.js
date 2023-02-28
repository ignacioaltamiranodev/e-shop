import { useAuth } from '@/context/authContext';
import { useCart } from '@/context/cartContext';
import Image from 'next/image';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import Cart from './Cart';
import SearchInput from './SearchInput';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { items, clearCart, showModal, setShowModal } = useCart();

  return (
    <header style={{ zIndex: '100' }} className="position-sticky top-0">
      {showModal && <Cart />}
      <nav className="container d-flex align-items-center justify-content-between">
        <Link className="fs-2" href={'/'}>
          e-shop
        </Link>
        <SearchInput />
        <div className="d-flex align-items-center text-white position-relative">
          <BiShoppingBag
            className="icon fs-4"
            onClick={() => setShowModal(true)}
          />
          {items?.length >= 1 && (
            <span className="primary-bg rounded px-1 items-count">
              {items?.length}
            </span>
          )}
          {!user ? (
            <>
              <Link
                className={
                  items.length >= 1
                    ? 'btn p-2 black-bg ms-4 me-2'
                    : 'btn p-2 black-bg mx-2'
                }
                href="/login"
              >
                Log In
              </Link>
              <Link className="btn p-2 black-bg" href="/signup">
                Sign In
              </Link>
            </>
          ) : (
            <>
              <span
                className={
                  items.length >= 1
                    ? 'ms-4 d-none d-md-inline-block'
                    : 'ms-3 me-3 d-none d-md-inline-block'
                }
              >
                {user?.displayName || user?.email?.split('@', 1)[0]}
              </span>
              <button
                className={
                  items.length >= 1 ? 'btn black-bg ms-4' : 'btn black-bg ms-2'
                }
                onClick={() => {
                  logOut();
                  clearCart();
                }}
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
