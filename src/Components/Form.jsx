import React from 'react';

function Form() {
  console.log('Form component rendered'); // Add this line for debugging
  return (
    <div className="flex flex-col items-center p-4">
      <input type="text" placeholder="Full Name" className="m-2 p-2 w-full max-w-lg bg-gray-700 text-white border border-gray-600" />
      <input type="email" placeholder="Email" className="m-2 p-2 w-full max-w-lg bg-gray-700 text-white border border-gray-600" />
      <input type="tel" placeholder="Phone Number" className="m-2 p-2 w-full max-w-lg bg-gray-700 text-white border border-gray-600" />
      <input type="text" placeholder="Occupation" className="m-2 p-2 w-full max-w-lg bg-gray-700 text-white border border-gray-600" />
      <button className="mt-4 p-2 bg-cyan-400 text-black">Submit</button>
    </div>
  );
}

export default Form;
