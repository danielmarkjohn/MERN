import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesOffered } from "@config/services";

const ServicesNZAU: React.FC = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-4 text-xl text-gray-600"
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesOffered.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 4) }}
              whileHover="hover"
              className="p-6 bg-white rounded-lg shadow-lg cursor-pointer"
              onClick={openModal} // Open modal on card click
            >
              <service.icon className="w-12 h-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="max-w-3xl p-8 mx-auto mt-16 text-center bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-lg text-white/90">
            Contact us today to discuss your project and how we can help you
            achieve your goals.
          </p>

          <br />
          <button
            onClick={openModal} // Open modal on button click
            className="px-8 py-3 text-base font-medium text-primary bg-white rounded-md"
          >
            Check Pricing
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              Get in touch with us through the following channels:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email: axspherehub@gmail.com
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01"
                  />
                </svg>
                Phone: 0223 717 917
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h.01M15 16h.01M12 13h.01"
                  />
                </svg>
                WhatsApp: 0223 717 917
              </li>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ServicesNZAU;