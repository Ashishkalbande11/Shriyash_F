import React from "react";
import review from "../images/review.jpg"

const About = () => {
  return (
    <>
    <div className="w-[97%] mx-auto my-12 p-6 bg-white shadow-lg rounded-lg md:w-[80%]">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        हमारे बारे में
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        <strong className="text-green-600">श्रीयश नर्सरी</strong> में आपका स्वागत है, 
        जहां हम कल के बीजों को पोषित करते हैं। हमारी नर्सरी पौधों, पेड़ों और बागवानी की 
        आवश्यकताओं की एक विस्तृत श्रृंखला प्रदान करने के लिए समर्पित है, जिससे आपका बगीचा 
        जीवन से भर सके।
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        श्रीयश में, हम स्थिरता और पर्यावरण के अनुकूल प्रथाओं में विश्वास करते हैं। 
        हर पौधे को ध्यानपूर्वक उगाया जाता है ताकि उसकी सेहत और जीवन शक्ति सुनिश्चित हो। 
        चाहे आप अनुभवी माली हों या अपनी हरी यात्रा की शुरुआत कर रहे हों, हम हर कदम पर 
        आपकी मदद के लिए यहां हैं।
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        हमारे संग्रह का अन्वेषण करें और ग्रीनस्प्राउट नर्सरी के साथ उगाने की खुशी का 
        अनुभव करें।
      </p>
    </div>
    <div className="w-[97%] mx-auto  bg-white shadow-lg rounded-lg md:w-[80%] md:mb-6">
      <img className="rounded-lg" src={review} alt="" />
    </div>
    </>
  );
};

export default About;
