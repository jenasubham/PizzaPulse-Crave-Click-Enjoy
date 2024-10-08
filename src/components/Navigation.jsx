import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Navigation() {
  const cartStyle = {
    background: '#F59E0d',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px'
  };

  const { cart } = useContext(CartContext); // Accessing the cart context

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
        </Link>

        <ul className="flex items-center">
          <li className="font-bold text-lg">
            <Link to="/">Home</Link>
          </li>

          <li className="font-bold text-lg mx-8">
            <Link to="/products">Products</Link>
          </li>

          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span className='mr-2 font-bold'>
                  {cart?.totalItems ? cart.totalItems : 0} {/* Displaying the total number of items in the cart */}
                </span>
                <img src="/images/cart.png" alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
