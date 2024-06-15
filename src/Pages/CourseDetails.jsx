import React from 'react';

const CourseDetails = () => {
  return (
    <div className="flex flex-col items-center p-8 text-white">
      <h1 className="text-2xl font-semibold mb-6">IT Audit and Cybersecurity Training Program</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Invest in Your Future with Our Comprehensive Training</h2>
          <p>Duration: 8-12 Weeks</p>
          <p>Investment: Starting at $3,000</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Program Overview</h2>
          <p>Embark on a transformative journey with our IT Audit and Cybersecurity Training Program. Designed for aspiring professionals, this intensive 8-12 week course offers a deep dive into the critical aspects of IT auditing and cybersecurity.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">What You’ll Learn</h2>
          <ul className="list-disc list-inside">
            <li>Foundational IT Audit Principles: Understand the intricacies of IT audit, including frameworks, methodologies, and best practices.</li>
            <li>Cybersecurity Essentials: Gain insights into the latest cybersecurity threats and defense mechanisms to protect digital assets.</li>
            <li>Regulatory Compliance: Navigate through complex regulations such as SOX, SOC 2, ISO27001, ensuring your organization’s adherence to legal standards.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Career Advancement Services</h2>
          <ul className="list-disc list-inside">
            <li>Mock Interviews: Hone your interview skills with real-world scenarios to confidently tackle any challenge.</li>
            <li>Resume Building: Craft a compelling resume that highlights your expertise and achievements.</li>
            <li>Job Placement Assistance: Leverage our network to find exciting opportunities in the field of IT audit and cybersecurity.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li>Expert Instructors: Learn from seasoned professionals with years of experience in IT audit and cybersecurity.</li>
            <li>Hands-On Experience: Apply your knowledge through practical exercises and real-world case studies.</li>
            <li>Supportive Community: Join a network of peers and mentors dedicated to your success.</li>
          </ul>
        </div>

        <div className="text-center">
          <p>Are you ready to elevate your career? Enroll in our IT Audit and Cybersecurity Training Program today and unlock your potential!</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
