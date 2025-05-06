import React, { useState, useEffect } from "react";
import {
  Overview,
  Genre,
  Popularity,
  BvR,
  BxR,
  Distruption,
  Discrepancy,
  Conclusion,
} from "../components/index";

const ContentSection = ({ section }) => {
  switch (section) {
    case "overview":
      return (
        <div>
          <Overview />
        </div>
      );
    case "genre":
      return (
        <div>
          <Genre />
        </div>
      );
    case "popularity":
      return (
        <div>
          <Popularity />
        </div>
      );
    case "bxr":
      return (
        <div>
          <BxR />
        </div>
      );
    case "bvr":
      return (
        <div>
          <BvR />
        </div>
      );
    case "distruption":
      return (
        <div>
          <Distruption />
        </div>
      );
    case "discrepancy":
      return (
        <div>
          <Discrepancy />
        </div>
      );
    case "conclusion":
      return (
        <div>
          <Conclusion />
        </div>
      );
    default:
      return (
        <div>
          <Overview />
        </div>
      );
  }
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [activeSection, setActiveSection] = useState("overview");

  // Handle sidebar item click
  const handleNavClick = (section, event) => {
    event.preventDefault(); // Prevent default link behavior
    setActiveSection(section);

    // On mobile, close the sidebar after selection
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Update isMobile state based on window size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Automatically close sidebar on mobile view
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Sidebar */}
      <div
        className={`bg-[#370637] text-white h-full z-20 transition-all duration-300 ${
          isMobile ? "fixed left-0 top-0 bottom-0" : "relative"
        } ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        <div className="flex justify-between items-center p-4">
          &nbsp; &nbsp;
          {isMobile && (
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          )}
        </div>
        <nav className="mt-4">
          <ul>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "overview" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("overview", e)}
            >
              <a href="#">Overview</a>
            </li>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "genre" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("genre", e)}
            >
              <a href="#">Genre</a>
            </li>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "popularity" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("popularity", e)}
            >
              <a href="#">Viewers Vote</a>
            </li>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "bxr" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("bxr", e)}
            >
              <a href="#">Budget x Revenue</a>
            </li>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "distruption" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("distruption", e)}
            >
              <a href="#">Disruption</a>
            </li>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "bvr" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("bvr", e)}
            >
              <a href="#">Budget vs. Revenue</a>
            </li>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "discrepancy" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("discrepancy", e)}
            >
              <a href="#">Discrepancy</a>
            </li>
            <li
              className={`py-2 px-4 hover:bg-purple-800 rounded cursor-pointer ${
                activeSection === "conclusion" ? "bg-purple-700" : ""
              }`}
              onClick={(e) => handleNavClick("conclusion", e)}
            >
              <a href="#">Conclusion</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {isMobile && (
            <button className="mb-4" onClick={() => setIsOpen(true)}>
              <Menu size={24} />
            </button>
          )}
          <ContentSection section={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default Home;
