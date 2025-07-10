import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { FaUser, FaPaperPlane } from "react-icons/fa";
import { format } from "date-fns"; // Install via `npm install date-fns`

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2rdVjN9JOOiLUf2J2GWq1zne_85Uq9M",
  authDomain: "e-waste-management-76e27.firebaseapp.com",
  projectId: "e-waste-management-76e27",
  storageBucket: "e-waste-management-76e27.firebasestorage.app",
  messagingSenderId: "1045766439158",
  appId: "1:1045766439158:web:bfa987896b39b7dc2c6cd7"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");

  // ✅ Fetch messages from Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, "communityChat"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // ✅ Function to send a message
  const sendMessage = async () => {
    if (newMessage.trim() && username.trim()) {
      try {
        await addDoc(collection(db, "communityChat"), {
          user: username,
          text: newMessage,
          timestamp: serverTimestamp()
        });
        setNewMessage(""); // Clear input field
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 text-center mt-6">🌍 Community Chat</h1>
      <p className="text-center text-gray-600 text-lg">Share thoughts, ask questions & help others!</p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
        {/* Chat Messages */}
        <div className="overflow-y-auto max-h-80 border p-4 rounded-lg bg-white">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div key={msg.id} className="p-3 border-b flex items-start gap-3">
                <FaUser className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold">{msg.user}</p>
                  <p className="text-gray-700">{msg.text}</p>
                  <p className="text-sm text-gray-500">
                    {msg.timestamp ? format(msg.timestamp.toDate(), "PPpp") : "Just now"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No messages yet. Be the first to share!</p>
          )}
        </div>

        {/* Chat Input */}
        <div className="mt-4 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border px-4 py-2 rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            rows="3"
            placeholder="Write your message..."
            className="border px-4 py-2 rounded-lg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 w-fit"
            onClick={sendMessage}
          >
            <FaPaperPlane /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;
