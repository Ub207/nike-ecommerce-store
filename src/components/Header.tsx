import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Top Strip */}
      <div className="top-strip">
        <span>Find a Store</span>
        <span>Help</span>
        <span>Join Us</span>
        <span>Sign In</span>
      </div>

      {/* Main Navbar */}
      <nav className="nav-main">
        {/* Left Logo */}
        <div className="nav-logo">
          <Link href="/">
            <Image src="/logo-2.png" alt="Nike Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Center Links */}
        <ul className="nav-links">
          <li><Link href="/">New & Featured</Link></li>
          <li><Link href="/men">Men</Link></li>
          <li><Link href="/women">Women</Link></li>
          <li><Link href="/kids">Kids</Link></li>
          <li><Link href="/sale">Sale</Link></li>
          <li><Link href="/snkrs">SNKRS</Link></li>
        </ul>

        {/* Right Icons */}
        <div className="nav-icons">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <Link href="/wishlist">
            <Image src="/h-1.png" alt="Wishlist" width={24} height={24} />
          </Link>
          <Link href="/cart">
            <Image src="/cart.png" alt="Cart" width={24} height={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
