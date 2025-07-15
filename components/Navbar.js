import Link from 'next/link';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">FOOD BLOG</div>
    <ul className="nav-links">
      <li>
        <Link href="/user">Home</Link>
      </li>
      <li>
        <Link href="/help">Help</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
