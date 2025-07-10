import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRecycle, FaHandHoldingHeart, FaLeaf, FaGlobe, FaUsers, FaRobot } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "2020", eWaste: 50 },
  { name: "2021", eWaste: 60 },
  { name: "2022", eWaste: 70 },
  { name: "2023", eWaste: 80 },
  { name: "2024", eWaste: 90 },
];

const Home = () => {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="bg-green-700 text-white text-center py-16 px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 mt-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Reduce, Reuse, Recycle ♻️
        </motion.h1>
        <motion.p 
          className="text-lg mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join us in creating a sustainable future by managing e-waste responsibly.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/pledge" className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg text-lg hover:bg-yellow-500 transition">
            Take the Pledge
          </Link>
        </motion.div>
      </section>

      {/* E-Waste Statistics Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">E-Waste Generation Over Years</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#4A5568" />
            <YAxis stroke="#4A5568" />
            <Tooltip />
            <Bar dataKey="eWaste" fill="#34D399" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </section>
      
      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaRecycle className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Find a Recycling Center</h3>
            <p className="text-gray-600">Locate the nearest e-waste center in your city.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaHandHoldingHeart className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Donate Old Electronics</h3>
            <p className="text-gray-600">Give your unused gadgets to people in need.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaLeaf className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Go Green</h3>
            <p className="text-gray-600">Take small steps towards a cleaner environment.</p>
          </div>
        </div>
      </section>

       {/* Awareness Section */}
       <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">Why is E-Waste a Problem?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Electronic waste contains toxic substances that harm the environment. Proper disposal and recycling can reduce pollution and protect our planet. Be part of the change today!
        </p>
      </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Cards */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaGlobe className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Global Awareness</h3>
            <p className="text-gray-600">Learn how e-waste affects the world.</p>
            <Link to="/about" className="text-green-700 font-bold mt-2 inline-block">Learn More →</Link>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Community Support</h3>
            <p className="text-gray-600">Connect with eco-friendly individuals.</p>
            <Link to="/community" className="text-green-700 font-bold mt-2 inline-block">Join Now →</Link>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaRecycle className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Recycle Responsibly</h3>
            <p className="text-gray-600">Get tips on proper e-waste disposal.</p>
            <Link to="/recycle" className="text-green-700 font-bold mt-2 inline-block">Learn More →</Link>
          </motion.div>
        </div>
      </section>

       {/* AI Chatbot Section */}
       <button 
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full flex items-center shadow-lg hover:bg-blue-700 transition"
        onClick={() => window.open("https://gemini.google.com", "_blank")}
      >
        <FaRobot className="mr-2" /> Chat with AI
      </button>

      {/* Call to Action */}
      <section className="bg-green-700 text-white text-center py-12 px-4">
        <motion.h2 
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
        >
          Be a Part of the Change
        </motion.h2>
        <p className="text-lg mb-6">Start recycling, donating, and spreading awareness today.</p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/signup" className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg text-lg hover:bg-yellow-500 transition">
            Get Started
          </Link>
        </motion.div>
      </section>



    </div>

    
  );
};

export default Home;
