import { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaPlusCircle, FaGoogle, FaMoneyBillWave, FaWhatsapp } from "react-icons/fa";
import { db, collection, addDoc, query, orderBy, onSnapshot } from "../firebase";

const BuySell = () => {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newItem, setNewItem] = useState({ name: "", price: "", condition: "", seller: "", phone: "" });
  const [showForm, setShowForm] = useState(false);

  // Fetch listings from Firestore
  useEffect(() => {
    const q = query(collection(db, "listings"), orderBy("price", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setListings(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // Add listing to Firestore
  const addListing = async () => {
    if (newItem.name && newItem.price && newItem.condition && newItem.seller && newItem.phone) {
      await addDoc(collection(db, "listings"), newItem);
      setNewItem({ name: "", price: "", condition: "", seller: "", phone: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 text-center mt-6">💰 Buy & Sell Used Electronics</h1>
      <p className="text-center text-gray-600 text-lg">Give your old devices a new life and earn money! ♻️</p>

      <div className="flex justify-center gap-4 mt-6">
        <input
          type="text"
          placeholder="Search items..."
          className="border px-4 py-2 rounded-lg w-1/2"
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaFilter /> Filters
        </button>
      </div>

      <div className="bg-green-100 p-6 mt-12 rounded-lg text-center shadow-md">
        <h2 className="text-3xl font-bold text-green-700">📢 Sell Your Old Electronics</h2>
        <button onClick={() => setShowForm(true)} className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          <FaPlusCircle className="inline-block mr-2" /> List an Item
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">📌 List Your Item</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="Item Name" className="border px-4 py-2 rounded-lg" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
            <input type="number" placeholder="Price (₹)" className="border px-4 py-2 rounded-lg" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
            <input type="text" placeholder="Condition" className="border px-4 py-2 rounded-lg" value={newItem.condition} onChange={(e) => setNewItem({ ...newItem, condition: e.target.value })} />
            <input type="text" placeholder="Seller Name" className="border px-4 py-2 rounded-lg" value={newItem.seller} onChange={(e) => setNewItem({ ...newItem, seller: e.target.value })} />
            <input type="tel" placeholder="Phone Number" className="border px-4 py-2 rounded-lg" value={newItem.phone} onChange={(e) => setNewItem({ ...newItem, phone: e.target.value })} />
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg" onClick={addListing}><FaPlusCircle /> Add Item</button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {listings.filter(item => item.name.toLowerCase().includes(searchQuery)).map(item => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">💰 Price: ₹{item.price}</p>
            <p className="text-gray-600">📌 Condition: {item.condition}</p>
            <p className="text-gray-600">👤 Seller: {item.seller}</p>
            <p className="text-gray-600">📞 Contact: {item.phone}</p>
            <a href={`https://wa.me/${item.phone}`} target="_blank" rel="noopener noreferrer" className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        ))}
      </div>
       {/* 🔍 Google Tools Integration */}
       <div className="mt-12 bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700 text-center">🚀 Smart E-Waste Management with Google Tools</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaGoogle className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Google Lens</h3>
            <p className="text-gray-600 text-sm">Use **Google Lens** to identify electronic components before selling.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaSearch className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Price Comparison</h3>
            <p className="text-gray-600 text-sm">Search the web for the best resale prices using **Google Custom Search Engine**.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaMoneyBillWave className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Google Pay</h3>
            <p className="text-gray-600 text-sm">Enable secure payments through **Google Pay integration**.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
