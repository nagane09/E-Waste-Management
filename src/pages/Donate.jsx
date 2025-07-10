import { useState } from "react";

const Donate = () => {
  const [beforePhoto, setBeforePhoto] = useState(null);
  const [afterPhoto, setAfterPhoto] = useState(null);
  const [note, setNote] = useState("");

  const handlePhotoUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === "before") setBeforePhoto(URL.createObjectURL(file));
    else setAfterPhoto(URL.createObjectURL(file));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8 mt-10">
        Donate Your E-Waste
      </h1>

      {/* AI Suggestions */}
      <div className="bg-gray-100 p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          AI-Powered Recycling Suggestions
        </h2>
        <p>Click below to get smart recycling suggestions using Google Gemini.</p>
        <a
          href="https://gemini.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            Open Google Gemini
          </button>
        </a>
      </div>

      {/* Google Form - Donate E-Waste */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Fill Out the Donation Form
        </h2>
        <p>Submit details about your e-waste using the form below.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfCPSXZUYsI7hIow60Ts2uHGw-O9-NhIpr59gwO-UrpzsttCQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
            Open Google Form
          </button>
        </a>
      </div>

      {/* Google Sheets - View Donations */}
      <div className="bg-gray-100 p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          View Donation Records
        </h2>
        <p>All submitted donations are recorded securely in Google Sheets.</p>
        <a
          href="https://docs.google.com/spreadsheets/d/1gBX7_qRXdi0WnP8LlRJ9PZfrMsCiZTdRzMYVrZHZ8Lc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 px-5 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700">
            View Donation Records
          </button>
        </a>
      </div>

      {/* Google Maps - Find Recycling Centers */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Find Nearby Donation Centers
        </h2>
        <p>Locate e-waste recycling centers near you on Google Maps.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60500.574738222815!2d73.7757157511479!3d18.60620517433322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sE-Waste%20Recycling%20Centers%20Near%20Me!5e0!3m2!1sen!2sin!4v1743054145610!5m2!1sen!2sin"
          width="100%"
          height="350"
          className="mt-4 border rounded-lg"
          loading="lazy"
        ></iframe>
      </div>

      
      {/* Google Drive - Upload E-Waste Images */}
      <div className="bg-gray-100 p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Upload E-Waste Images
        </h2>
        <p>Share pictures of your e-waste for proper disposal.</p>
        <a
          href="https://drive.google.com/drive/folders/1dOtXjBOV4dbgCiJqQ6TZ-gj-AsiSLYQy?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 px-5 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700">
            Upload to Google Drive
          </button>
        </a>
      </div>

      {/* Google Pay - Support the Cause */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Support Recycling Efforts
        </h2>
        <p>Your donations help support e-waste recycling initiatives.</p>
        <a
          href="https://pay.google.com/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 px-5 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700">
            Donate via Google Pay
          </button>
        </a>
      </div>
    </div>
  );
};

export default Donate;
