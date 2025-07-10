import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">Awareness</Link></li>
            <li><Link to="/donate" className="hover:underline">Donate</Link></li>
            <li><Link to="/recycling-centers" className="hover:underline">Find Centers</Link></li>
            <li><Link to="/buy-sell" className="hover:underline">Buy & Sell</Link></li>
            <li><Link to="/community" className="hover:underline">Community</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p>Email: support@ewaste.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Green Earth Street, Eco City</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-gray-500 pt-4">
        <p>&copy; {new Date().getFullYear()} E-Waste Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
