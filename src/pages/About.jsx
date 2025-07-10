import { FaRecycle, FaUsers, FaHandsHelping, FaGlobe, FaChartLine, FaStar, FaEnvelope, FaSkullCrossbones, FaLeaf, FaHashtag, FaTools, FaWrench, FaLightbulb } from "react-icons/fa";
import { useState, useEffect } from "react";

const About = () => {
  const [impactData, setImpactData] = useState({
    devicesRecycled: 4500,
    carbonSaved: 12000, // Measured in kg
  });

  // Simulate live impact update
  useEffect(() => {
    const interval = setInterval(() => {
      setImpactData((prev) => ({
        devicesRecycled: prev.devicesRecycled + Math.floor(Math.random() * 10),
        carbonSaved: prev.carbonSaved + Math.floor(Math.random() * 50),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* 🛠️ Repair & Reuse Hub */}
      

      {/* 🎯 Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-700 mb-4 mt-4">🌍 Join the E-Waste Revolution!</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Every device counts! By properly recycling e-waste, we can reduce pollution, save energy, and create a sustainable future. Be a part of the movement today! 💚
        </p>
      </div>

      <div className="bg-yellow-100 p-6 shadow-md rounded-lg text-center mb-12">
        <h2 className="text-3xl font-semibold text-yellow-700 mb-4"> Repair & Reuse Hub</h2>
        <p className="text-gray-700 text-lg">Don't discard, repair! Explore DIY repair guides, find local repair shops, and get AI-powered fix suggestions. 🛠️🔧</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaWrench className="text-4xl text-yellow-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">DIY Repair Guides</p>
            <p className="text-gray-600 text-sm">Watch embedded YouTube tutorials and learn to fix common electronic issues.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaTools className="text-4xl text-yellow-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Find Local Repair Shops</p>
            <p className="text-gray-600 text-sm">Browse a list of verified repair shops in your area and get professional help.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaLightbulb className="text-4xl text-yellow-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">AI Fix Suggestions</p>
            <p className="text-gray-600 text-sm">Use Google Gemini to diagnose and find fixes for common device problems.</p>
          </div>
        </div>
      </div>

      {/* 🚨 The Dark Side of E-Waste */}
      <div className="bg-red-100 p-6 shadow-md rounded-lg text-center mt-12">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">⚠️ The Dark Side of E-Waste</h2>
        <p className="text-gray-700 text-lg">
          Every year, **50 million tons** of e-waste is dumped worldwide. Most of it is burned or left in landfills, releasing **toxic chemicals** like **lead, mercury, and arsenic** into our air, soil, and water. 🌎
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaSkullCrossbones className="text-4xl text-red-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Cancer & Brain Damage</p>
            <p className="text-gray-600 text-sm">Toxic fumes from burning e-waste increase the risk of **cancer, lung diseases, and brain damage**.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaSkullCrossbones className="text-4xl text-red-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Water Pollution</p>
            <p className="text-gray-600 text-sm">Heavy metals **leak into groundwater**, poisoning drinking supplies and harming aquatic life. 🐟</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaSkullCrossbones className="text-4xl text-red-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Child Labor & Exploitation</p>
            <p className="text-gray-600 text-sm">Millions of **children in developing countries** are forced to work in hazardous e-waste processing. 🚸</p>
          </div>
        </div>
      </div>

      {/* 🌍 The Change We’re Creating */}
      <div className="bg-green-100 p-6 shadow-md rounded-lg text-center mt-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">🌿 The Change We’re Creating</h2>
        <p className="text-gray-700 text-lg">
          By **recycling** and **donating** e-waste, we are reducing pollution, protecting human health, and promoting a circular economy. 🌱
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaLeaf className="text-4xl text-green-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Cleaner Air & Water</p>
            <p className="text-gray-600 text-sm">Less e-waste in landfills means fewer **toxic chemicals** in our environment.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaLeaf className="text-4xl text-green-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">New Jobs & Opportunities</p>
            <p className="text-gray-600 text-sm">Recycling industries create **jobs**, reducing child labor in toxic conditions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <FaLeaf className="text-4xl text-green-700 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Saving Natural Resources</p>
            <p className="text-gray-600 text-sm">Recycling reduces demand for mining, saving precious **gold, silver, and rare metals**.</p>
          </div>
        </div>
      </div>

      {/* 📊 Impact Section */}
      <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🌱 Our Impact So Far</h2>
        <div className="flex justify-center gap-10">
          <div>
            <FaChartLine className="text-5xl text-green-700 mx-auto mb-2" />
            <p className="text-xl font-bold text-green-700">{impactData.devicesRecycled.toLocaleString()}+</p>
            <p className="text-gray-600">Devices Recycled</p>
          </div>
          <div>
            <FaChartLine className="text-5xl text-blue-700 mx-auto mb-2" />
            <p className="text-xl font-bold text-blue-700">{impactData.carbonSaved.toLocaleString()} kg</p>
            <p className="text-gray-600">Carbon Emissions Reduced</p>
          </div>
        </div>
      </div>

      {/* ⭐ Testimonials Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">💬 What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FaStar className="text-yellow-500 text-4xl mx-auto mb-3" />
            <p className="italic text-gray-700">
              "This platform has changed how I think about e-waste. I found a nearby recycling center so easily!"
            </p>
            <p className="font-semibold text-gray-800 mt-2">- Ramesh Kumar</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FaStar className="text-yellow-500 text-4xl mx-auto mb-3" />
            <p className="italic text-gray-700">
              "I was able to donate my old laptop, and it was refurbished for an NGO. Amazing work!"
            </p>
            <p className="font-semibold text-gray-800 mt-2">- Priya Sharma</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FaStar className="text-yellow-500 text-4xl mx-auto mb-3" />
            <p className="italic text-gray-700">
              "The Google Maps integration made it easy to find an e-waste collection center near me!"
            </p>
            <p className="font-semibold text-gray-800 mt-2">- Ankit Verma</p>
          </div>
        </div>
      </div>

      {/* 🔥 Call to Action */}
      <div className="bg-green-700 text-white text-center py-10 mt-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold">Ready to Make a Difference? 🌿</h2>
        <p className="text-lg mt-2">Start recycling today and inspire others to do the same!</p>
        <a
          href="/donate"
          className="inline-block mt-4 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Donate Your E-Waste
        </a>
      </div>

      

      {/* 📢 Slogan & Social Media Awareness */}
      <div className="bg-blue-100 p-6 shadow-md rounded-lg text-center mt-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">📢 Spread the Message!</h2>
        <p className="text-gray-700 text-lg">
          **Your actions inspire change!** Post on **Instagram, Twitter, LinkedIn, or Facebook** using our slogan:
        </p>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-2xl font-bold text-blue-600">🌱 "Don't Trash Tech, Recycle It!"</h3>
          <p className="text-gray-600 text-lg mt-2">
            Use the hashtag <span className="text-blue-600 font-semibold">#RecycleTechSaveEarth</span> and tag us! 📲
          </p>
        </div>
      </div>

      {/* 📩 Contact Section */}
      <div className="mt-12 text-center">
        <FaEnvelope className="text-4xl text-gray-700 mx-auto mb-2" />
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-2">Have questions? Want to collaborate? Drop us a message!</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSczJwkltihqQZwG-mmic-y5-5-8o0YHsHKZMASiOkJVTvnccA/viewform?embedded=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Give Feedback
        </a>
      </div>
    </div>
  );
};

export default About;
