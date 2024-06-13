import React from 'react';

function Form() {
    return (
      <div className="flex flex-col items-center p-4">
        <input
          type="text"
          name="fullName" // Add name attribute
          placeholder="Full Name"
          className="input-field"
          autoComplete="name" // Add autocomplete attribute
        />
        <input
          type="email"
          name="email" // Add name attribute
          placeholder="Email"
          className="input-field"
          autoComplete="email" // Add autoComplete attribute
        />
        <input
          type="tel"
          name="phoneNumber" // Add name attribute
          placeholder="Phone Number"
          className="input-field"
          autoComplete="tel" // Add autoComplete attribute
        />
        <input
          type="text"
          name="occupation" // Add name attribute
          placeholder="Current Occupation"
          className="input-field"
        />
        <button className="btn-submit">Submit</button>
      </div>
    );
  }
  
  export default Form;
  