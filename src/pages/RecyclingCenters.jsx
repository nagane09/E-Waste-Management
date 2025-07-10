const RecyclingCenters = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6 mt-10">
        Find a Recycling Center Near You
      </h1>

      {/* Embedded Google Map */}
      <div className="w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d121001.10119152104!2d73.73451318198106!3d18.60627308770762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%22E-waste%20recycling%20centers%20near%20me%22!5e0!3m2!1sen!2sin!4v1743007381956!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* List of Recycling Centers */}
      <div className="bg-white p-4 shadow-lg rounded-lg mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Available Recycling Centers
        </h2>
        <ul className="space-y-3">
          <li className="p-3 border-b border-gray-200">
            <strong className="text-lg text-green-700">Mumbai Recycling Center</strong>
            <p className="text-gray-600">Andheri, Mumbai, India</p>
            <p className="text-yellow-500">⭐⭐⭐⭐☆ (4.2/5)</p>
          </li>
          <li className="p-3 border-b border-gray-200">
            <strong className="text-lg text-green-700">Delhi Recycling Center</strong>
            <p className="text-gray-600">Connaught Place, Delhi, India</p>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐ (4.8/5)</p>
          </li>
          <li className="p-3">
            <strong className="text-lg text-green-700">Bangalore E-Waste Facility</strong>
            <p className="text-gray-600">MG Road, Bangalore, India</p>
            <p className="text-yellow-500">⭐⭐⭐⭐ (4.0/5)</p>
          </li>
        </ul>
      </div>

      {/* Recyclable Items Section */}
      <div className="bg-gray-100 p-4 shadow-lg rounded-lg mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          What Can Be Recycled?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-3 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-green-700">Mobile Phones</h3>
            <p className="text-gray-600">Old or broken mobile phones & accessories.</p>
          </div>
          <div className="p-3 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-green-700">Laptops & Computers</h3>
            <p className="text-gray-600">Obsolete laptops, desktops, and computer parts.</p>
          </div>
          <div className="p-3 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-green-700">Batteries</h3>
            <p className="text-gray-600">Used or damaged batteries from electronic devices.</p>
          </div>
          <div className="p-3 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-green-700">Televisions & Monitors</h3>
            <p className="text-gray-600">CRT, LED, and LCD screens for proper disposal.</p>
          </div>
          <div className="p-3 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-green-700">Wires & Cables</h3>
            <p className="text-gray-600">Electrical wires, chargers, and cables.</p>
          </div>
          <div className="p-3 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-green-700">Printers & Scanners</h3>
            <p className="text-gray-600">Non-functional printers and scanner devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingCenters;
