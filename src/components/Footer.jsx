import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-screen bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Our Services */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Our Services
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/shop" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-white">
                Blogs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 2: Customer Support */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Customer Support
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-white">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-white">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media & Query Form */}
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Have a Query? */}
          <h2 className="text-xl font-semibold text-white mt-5 mb-3">
            Have a Query?
          </h2>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-slate-400 px-3 py-2 w-full text-slate-300 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-gray-700 mt-6 pt-4">
        <p>
          © {new Date().getFullYear()} Your Painting Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
