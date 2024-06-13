import React from 'react';

function Form() {
  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        placeholder="Full Name"
        className="input-field"
      />
      <input
        type="email"
        placeholder="Email"
        className="input-field"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="input-field"
      />
      <input
        type="text"
        placeholder="Occupation"
        className="input-field"
      />
      <button className="btn-submit">Submit</button>
    </div>
  );
}

export default Form;
