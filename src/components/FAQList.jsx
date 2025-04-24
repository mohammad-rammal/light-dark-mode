import { useEffect, useState } from "react";
import faqData from "../data/faqData";
import FAQItem from "./FAQItem";

const FAQList = ({ toggleDarkMode, darkMode }) => {
  const [openID, setOpenID] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleItem = (id) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenID((prevID) => (prevID === id ? null : id));
  };

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenID(null);
  };

  useEffect(() => {
    if (openID && typeof window !== "undefined") {
      setTimeout(() => {
        const element = document.getElementById(`faq-item-${openID}`);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [openID]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-center sm:text-left w-full sm:w-auto">
          Frequently Asked Questions
        </h2>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center gap-2 px-4 py-2 text-secondary font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-indigo-500 transition-all duration-300 cursor-pointer"
            onClick={toggleExpandAll}
          >
            <i
              className={`bx bx-${
                expandAll ? "collapse-alt" : "expand-alt"
              } text-lg`}
            >
              <span className="ps-2">
                {expandAll ? "Collapse All" : "Expand All"}
              </span>
            </i>
          </button>
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer dark:from-gray-700 dark:to-gray-800 dark:text-gray-200"
          >
            <i className={`bx bx-${darkMode ? "sun" : "moon"} text-xl`}></i>
          </button>
        </div>
      </div>
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden transition-all duration-300">
        {faqData.map((items) => {
          return (
            <FAQItem
              key={items.id}
              items={items}
              onClick={toggleItem}
              isOpen={expandAll || openID === items.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FAQList;
