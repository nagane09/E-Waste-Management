import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Pledge = () => {
  const globalEwastePerSecond = 1.82; // Approximate metric tons per second
  const startTimestamp = 1711920000000; // Fixed starting point (March 2025)
  const startEwaste = 50000000; // Approximate starting point in metric tons

  const [eWasteGenerated, setEWasteGenerated] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pledged, setPledged] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    const updateEWaste = () => {
      const elapsedSeconds = (Date.now() - startTimestamp) / 1000;
      setEWasteGenerated(startEwaste + elapsedSeconds * globalEwastePerSecond);
    };

    updateEWaste(); // Initial call
    const interval = setInterval(updateEWaste, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const handlePledge = () => {
    if (name && email) {
      setPledged(true);
      generateCertificate(name);
    }
  };

  const generateCertificate = (userName) => {
    const certificateUrl = `https://certificates.example.com/generate?name=${encodeURIComponent(userName)}`;
    window.open(certificateUrl, "_blank");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="bg-green-700 text-white text-center py-16 px-6 w-full">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Take the E-Waste Pledge 🌱
        </motion.h1>
        <motion.p 
          className="text-lg mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join the movement to reduce electronic waste and protect our planet. Every action counts!
        </motion.p>
      </section>

      {/* Live E-Waste Counter */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Global E-Waste Crisis 🌍</h2>
        <p className="text-lg text-gray-700 mb-4">
          Electronic waste is growing rapidly. Check out the estimated e-waste generated worldwide:
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md text-3xl font-bold text-green-700">
          {eWasteGenerated.toLocaleString(undefined, { maximumFractionDigits: 2 })} Metric Tons
        </div>
      </section>

      {/* Pledge Form */}
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Make Your Commitment</h2>
        <p className="text-gray-600 mb-6">Pledge to recycle, donate, or dispose of electronics responsibly.</p>
        <input 
          type="text" 
          placeholder="Enter your name" 
          className="w-full p-3 border rounded-md mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full p-3 border rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          onClick={handlePledge}
          className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-800 transition"
        >
          Take the Pledge
        </button>
        {pledged && <p className="mt-4 text-green-600">Thank you for pledging! Your certificate has been generated.</p>}
      </section>

      {/* AI-Powered E-Waste Sorting */}
      <section className="text-center py-12 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Sort Your E-Waste with AI</h2>
        <p className="text-gray-600 mb-6">Upload a photo of your electronic waste to get AI-based recycling suggestions.</p>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="mb-4"
        />
        {uploadedImage && (
          <div>
            <img src={uploadedImage} alt="Uploaded E-Waste" className="w-64 h-64 object-cover rounded-lg mx-auto mb-4" />
            <p className="text-green-600">Processing... AI is analyzing your e-waste.</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Share Your Commitment</h2>
        <p className="text-gray-600 mb-6">Spread awareness and encourage others to take the pledge!</p>
        <div className="space-x-4">
          <a 
            href={`https://twitter.com/intent/tweet?text=I've taken the e-waste pledge! Join me in making a difference. 🌱 #EWastePledge&url=https://yourwebsite.com/pledge`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Share on Twitter
          </a>
          <a 
            href={`https://api.whatsapp.com/send?text=I've taken the e-waste pledge! Join me in making a difference. 🌱 #EWastePledge https://yourwebsite.com/pledge`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            Share on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pledge;
