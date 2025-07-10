import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-lg">
      <h1 className="text-xl font-bold">E-Waste Management</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">Awareness</Link></li>
        <li><Link to="/donate" className="hover:text-yellow-400">Donate</Link></li>
        <li><Link to="/recycling-centers" className="hover:text-yellow-400">Find Centers</Link></li>
        <li><Link to="/buy-sell" className="hover:text-yellow-400">Buy & Sell</Link></li>
        <li><Link to="/community" className="hover:text-yellow-400">Community</Link></li>
      </ul>
      <div>
        <Link to="/login" className="mr-4 hover:text-yellow-400">Login</Link>
        <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
