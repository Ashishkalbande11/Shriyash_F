import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-lg m-1">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">हमारे बारे में</h3>
            <p className="text-sm text-gray-400">
            श्रीयश हाई-टेक नर्सरी में, हम आपके घर में प्रकृति की खूबसूरती लाने के लिए प्रतिबद्ध हैं। पौधों के प्रीमियम बीजों को उगाने और पोषित करने में हमारे वर्षों के अनुभव के साथ, हम पौधों की एक विस्तृत श्रृंखला प्रदान करते हैं जो हर स्थान के लिए उपयुक्त हैं। चाहे आप एक अनुभवी माली हों या अभी शुरुआत कर रहे हों, हमारे उच्च गुणवत्ता वाले पौधे, विशेषज्ञ सलाह और सतत् अभ्यास आपके हरे सपने को साकार करने में मदद करेंगे। आइए, मिलकर दुनिया को हरियाली से भरें, एक पौधा एक समय में ! 
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">त्वरित लिंक</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={()=> navigate("/")} className="text-sm text-gray-400 hover:text-white">
                घर
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/about")} className="text-sm text-gray-400 hover:text-white">
                हमारे बारे में
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/home")} className="text-sm text-gray-400 hover:text-white">
                सेवाएँ
                </button>
              </li>
              <li>
                <button onClick={()=> navigate("/contact")} className="text-sm text-gray-400 hover:text-white">
                संपर्क करें
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">हमें फ़ॉलो करें</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567820752302&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl hover:text-blue-800 transition duration-300" />

              </a>
              <a
                href="Shriyashnursery@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
               <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-2xl hover:text-blue-600 transition duration-300" />

              </a>
              <a
                href="Shriyashnursery@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl hover:text-blue-900 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com/shriyashnursery/profilecard/?igsh=MTE4MjBodjJiNHBieg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl hover:text-pink-700 transition duration-300" />
              </a>
              <div className="flex space-x-4">
      
      
    </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Shriyash Hi-Tech Nursary. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
