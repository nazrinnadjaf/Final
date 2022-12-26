import React, { useEffect } from "react";
import "./Contact.scss";

import { motion } from "framer-motion";
import Form from "./Form";



function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="Contact"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="Contact-top-container">
        <h1>do you have questions?</h1>
      </div>
      <div className="Contact-card">
        <Form /> 
        {/* <ContactGoogleMaps/> */}
         {/* <div className="Contact-image"></div> */}
         <div className="location__map">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63918.534522680704!2d-122.40357733207908!3d37.37183291146573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f0997becc65c9%3A0xdecb7a7e3778b0b7!2sTunitas%2C%20CA%2094019%2C%20USA!5e0!3m2!1sen!2sin!4v1657135813011!5m2!1sen!2sin"
                     width="100%"
                     height="394"
                     style={{ border: "0" }}
                     allowfullscreen=""
                     loading="lazy">
                   </iframe>
                  </div>
      </div>
    </motion.div>
  );
}

export default Contact;
