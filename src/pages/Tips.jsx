import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaLightbulb, FaQuestionCircle } from "react-icons/fa";

const Tips = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});

  // Filtered tips based on search
  const filteredTips = tipsData.filter((tip) =>
    tip.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle FAQ Accordion Toggle
  const toggleTip = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle Quiz Submission
  const handleQuizSubmit = (questionIndex) => {
    if (quizAnswers[questionIndex] === quizData[questionIndex].correctAnswer) {
      setQuizResults({ ...quizResults, [questionIndex]: "✅ Correct!" });
    } else {
      setQuizResults({ ...quizResults, [questionIndex]: "❌ Incorrect. Try again!" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      {/* Header Section */}
      <motion.h1
        className="text-4xl font-bold text-green-700 mb-4 flex items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaLightbulb className="mr-2 mt-7" /> Reduce E-Waste Responsibly
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Learn practical ways to reduce e-waste and contribute to a sustainable future.
      </motion.p>

      {/* Search Bar */}
      <div className="relative w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search for tips..."
          className="w-full p-3 border rounded-md pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      {/* Tips Section */}
      <div className="w-full max-w-3xl">
        {filteredTips.map((tip, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 mb-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleTip(index)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-green-700">
                {tip.title}
              </h3>
              <span className="text-gray-600">
                {openIndex === index ? "➖" : "➕"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{tip.detail}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quiz Section */}
      <div className="bg-white p-6 mt-10 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center justify-center">
          <FaQuestionCircle className="mr-2" /> E-Waste Quiz
        </h2>
        {quizData.map((question, index) => (
          <div key={index} className="mb-6">
            <p className="text-gray-600 mb-4">{question.question}</p>
            <div className="flex flex-col space-y-2">
              {question.options.map((option, optIndex) => (
                <label key={optIndex} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`quiz-${index}`}
                    value={option}
                    onChange={() =>
                      setQuizAnswers({ ...quizAnswers, [index]: option })
                    }
                  />{" "}
                  {option}
                </label>
              ))}
            </div>
            <button
              onClick={() => handleQuizSubmit(index)}
              className="bg-green-700 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-800 transition"
            >
              Submit Answer
            </button>
            {quizResults[index] && <p className="mt-3 text-lg">{quizResults[index]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

// List of Recycling & E-Waste Reduction Tips
const tipsData = [
  {
    title: "Extend Product Life",
    detail: "Maintain your electronics properly to increase their lifespan and reduce e-waste.",
  },
  {
    title: "Donate or Sell Old Devices",
    detail: "If your gadget is still functional, consider donating or selling it instead of discarding it.",
  },
  {
    title: "Opt for Repair Over Replacement",
    detail: "Instead of buying new electronics, repair old ones whenever possible.",
  },
  {
    title: "Choose Recyclable & Sustainable Products",
    detail: "When purchasing electronics, look for eco-friendly and recyclable options.",
  },
  {
    title: "Dispose of Batteries Separately",
    detail: "Batteries contain hazardous chemicals and should be disposed of at special recycling centers.",
  },
  {
    title: "Use Cloud Storage",
    detail: "Minimize the need for physical storage devices by using cloud-based storage solutions.",
  },
  {
    title: "Participate in Trade-in Programs",
    detail: "Many companies offer trade-in programs where you can exchange old devices for discounts on new ones.",
  },
];

// Quiz Questions
const quizData = [
  {
    question: "What is the best way to dispose of an old phone?",
    options: [
      "Throw it in the trash",
      "Take it to an e-waste recycling center",
      "Keep it at home indefinitely",
    ],
    correctAnswer: "Take it to an e-waste recycling center",
  },
  {
    question: "Which of the following contributes most to e-waste pollution?",
    options: [
      "Repairing old electronics",
      "Buying and discarding new devices frequently",
      "Using energy-efficient appliances",
    ],
    correctAnswer: "Buying and discarding new devices frequently",
  },
  {
    question: "Which is a sustainable way to reduce e-waste?",
    options: [
      "Using a device for as long as possible before replacing it",
      "Throwing old electronics in regular garbage bins",
      "Ignoring recycling programs",
    ],
    correctAnswer: "Using a device for as long as possible before replacing it",
  },
  {
    question: "What should you do with dead batteries?",
    options: [
      "Throw them in regular trash",
      "Take them to a special battery recycling facility",
      "Burn them to reduce waste",
    ],
    correctAnswer: "Take them to a special battery recycling facility",
  },
];

export default Tips;
