import React from 'react';
import emailjs from 'emailjs-com';

const serviceId = 'service_dcbfvlv'; // Replace with your EmailJS service ID
const templateId = 'template_z3i7ykj'; // Replace with your EmailJS template ID
const userId = 'V3zN_CRR1B_PLeUCd'; // Replace with your EmailJS user ID

emailjs.init(userId);

function Form() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target)
      .then((result) => {
        console.log(result.text);
        // Optionally handle success behavior like showing a success message
      }, (error) => {
        console.log(error.text);
        // Optionally handle error behavior like showing an error message
      });

    // Clear the form after submission
    e.target.reset();
  };

  return (
    <form className="flex flex-col items-center p-4" onSubmit={sendEmail}>
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
      />
      <input
        type="text"
        name="occupation"
        placeholder="Current Occupation"
        className="input-field"
      />
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  );
}

export default Form;
