import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
      <div className="max-w-xl text-center">
        <p className="text-lg mb-4">
          We would love to hear from you! Reach out to us through any of the following methods:
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-medium">Email</h2>
          <p className="text-sm">
            <a href="mailto:techshieldacademia@gmail.com" className="text-blue-500">techshieldacademia@gmail.com</a>
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-medium">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/ts_academia" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/techshieldacademia" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-medium mb-2">Get in Touch</h2>
          <p className="text-sm mb-4">Fill out our <a href="/" className="text-blue-500">contact form</a> on the Home page to send us a message directly.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
