import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { AiFillHome, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { FaSignInAlt } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useCart } from '@/context/cartContext';

const HamburgerMenu = () => {
  const { user, logOut } = useAuth();
  const { showModal } = useCart();
  const [openMenu, setOpenMenu] = useState(false);
  const { push } = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      push('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className={`${showModal ? 'd-none' : ''} d-md-none d-block`}>
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className={openMenu ? 'hamburger is-active' : 'hamburger'}
        >
          <div className="bar position-relative"></div>
        </button>
        <div
          className={openMenu ? 'open-menu' : 'closed-menu'}
          onClick={() => {
            openMenu && setOpenMenu(false);
          }}
        >
          <Link className="text-white text-center mb-2" href="/">
            <AiFillHome className="fs-4" />
            <span className="d-block">Home</span>
          </Link>
          <Link className="text-white text-center mb-2" href="/products">
            <GiRunningShoe className="fs-4" />
            <span className="d-block">Products</span>
          </Link>
          {user ? (
            <div
              style={{ cursor: 'pointer' }}
              className="text-white text-center"
              onClick={handleLogout}
            >
              <AiOutlineLogout className="fs-4" />
              <span className="d-block">Logout</span>
            </div>
          ) : (
            <>
              <Link className="text-white text-center mb-2" href="/login">
                <AiOutlineLogin className="fs-4" />
                <span className="d-block">Login</span>
              </Link>
              <Link className="text-white text-center mb-2" href="/signup">
                <FaSignInAlt className="fs-4" />
                <span className="d-block">Sign Up</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
