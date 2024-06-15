import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IconContext } from 'react-icons'; // Import IconContext for setting default icon properties
import { FaCheckCircle } from 'react-icons/fa'; // Import check circle icon from react-icons/fa

const serviceId = 'service_dcbfvlv'; // Replace with your EmailJS service ID
const templateId = 'template_z3i7ykj'; // Replace with your EmailJS template ID
const userId = 'V3zN_CRR1B_PLeUCd'; // Replace with your EmailJS user ID

emailjs.init(userId);

const Form = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Form validation via HTML5 built-in validation
      if (!e.target.checkValidity()) {
        // If form is invalid, trigger validation UI
        e.target.reportValidity();
        return;
      }

      const result = await emailjs.sendForm(serviceId, templateId, e.target);
      console.log(result.text);
      setSubmitMessage('Form submitted successfully!');
      setShowModal(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Failed to submit form. Please try again later.');
    }

    // Clear the form after submission
    e.target.reset();

    // Clear the success message and modal after a delay
    setTimeout(() => {
      setSubmitMessage('');
      setShowModal(false);
    }, 3000); // Clear message after 3 seconds
  };

  return (
    <form className="flex flex-col items-center p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="input-field"
        autoComplete="name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-field"
        autoComplete="email"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        className="input-field"
        autoComplete="tel"
        title="Phone number format: XXX-XXX-XXXX"
        required
      />
      <input
        type="text"
        name="occupation"
        placeholder="Current Occupation"
        className="input-field"
        required
      />
      <button type="submit" className="btn-submit">Submit</button>

      {/* Modal for successful submission */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg">
          <div className="bg-black bg-opacity-70 p-6 rounded-lg text-white flex items-center">
            <IconContext.Provider value={{ className: 'text-4xl text-green-500 mr-4' }}>
              <FaCheckCircle />
            </IconContext.Provider>
            <p className="text-lg">Form submitted successfully!</p>
          </div>
        </div>
      )}

      {/* Success message */}
      {submitMessage && <p className="text-green-500 mt-2">{submitMessage}</p>}
    </form>
  );
};

export default Form;
