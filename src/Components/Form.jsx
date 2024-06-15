import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IconContext } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';

const serviceId = 'service_dcbfvlv';
const templateId = 'template_z3i7ykj';
const userId = 'V3zN_CRR1B_PLeUCd';

emailjs.init(userId);

const Form = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [degreeEarned, setDegreeEarned] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!e.target.checkValidity()) {
        e.target.reportValidity();
        return;
      }

      let formData = {
        fullName: e.target.fullName.value.trim(),
        email: e.target.email.value.trim(),
        phoneNumber: e.target.phoneNumber.value.trim(),
        occupation: e.target.occupation.value.trim(),
        highestDegreeEarned: degreeEarned,
        yearEarned: degreeEarned !== 'N/A' ? e.target.yearEarned.value.trim() : 'N/A',
      };

      // If degreeEarned is 'N/A', set yearEarned to 'N/A'
      if (degreeEarned === 'N/A') {
        formData.yearEarned = 'N/A';
      } else {
        // Validate yearEarned if not 'N/A'
        const yearEarned = formData.yearEarned;
        if (!yearEarned || isNaN(yearEarned) || yearEarned < 1900 || yearEarned > new Date().getFullYear()) {
          alert('Please enter a valid year for when the degree was earned.');
          return;
        }
      }

      const result = await emailjs.sendForm(serviceId, templateId, e.target, userId);
      console.log(result.text);
      setSubmitMessage('Form submitted successfully!');
      setShowModal(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Failed to submit form. Please try again later.');
    }

    e.target.reset();

    setTimeout(() => {
      setSubmitMessage('');
      setShowModal(false);
    }, 3000);
  };

  const handleDegreeChange = (e) => {
    setDegreeEarned(e.target.value);
  };

  return (
    <form className="flex flex-col items-center p-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-2">Take the First Step</h2>
      <p className="text-xs text-center max-w-xs mb-4">
        Start by requesting more information and connecting directly with your designated admissions contact.
      </p>

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
      <select
        name="highestDegreeEarned"
        className="input-field"
        onChange={handleDegreeChange}
        required
      >
        <option value="">Highest Degree Earned</option>
        <option value="N/A">N/A</option>
        <option value="High School Diploma">High School Diploma</option>
        <option value="Associate Degree">Associate Degree</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="Doctorate">Doctorate</option>
        <option value="Other">Other</option>
      </select>
      {degreeEarned !== 'N/A' && (
        <input
          type="text"
          name="yearEarned"
          placeholder="Year Earned"
          className="input-field"
        />
      )}
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
