import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Arhum Malik",
      description: "Arhum Malik brings a wealth of experience in the IT audit and cyber security domain with over 8 years of experience in the field. Renowned for his meticulous approach to auditing, he is not just a manager but a mentor dedicated to sculpting the next generation of audit professionals. His guidance ensures that our curriculum is not only robust but also reflects the practical nuances of real-world audit scenarios."
    },
    {
      name: "Zain Syed Jafri",
      description: "Zain Syed Jafri’s strategic mind in the world of IT audit. With a proven track record in managerial roles and 8 years of hands on IT Audit experience, he steers the ship towards innovative and effective audit strategies. His insights go beyond conventional auditing techniques, providing students with a holistic understanding of how strategic assurance plays a pivotal role in organizational success."
    },
    {
      name: "Humza Malik",
      description: "Humza Malik, brings 4 years of Software Engineering experience, Humza plays a critical role in bridging the realms of technology and cybersecurity. He ensures that our curriculum incorporates the latest technological trends and innovations, preparing our students to face the dynamic nature of modern IT environments."
    },
    {
      name: "Najwa Javed",
      description: "Najwa Javed excels as she skillfully navigates the complex terrains of IT audit. By navigating the intricate landscapes of IT audit with finesse. With 6 years of hands-on experience, she brings a practical perspective to the classroom, enriching the learning experience with real-world anecdotes and insights. Her role is pivotal in ensuring that our students not only grasp the theoretical aspects but also understand the pragmatic challenges faced in the IT audit profession."
    }
  ];

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-semibold mb-6">About Us</h1>
      <div className="max-w-xl">
        {teamMembers.map((member, index) => (
          <div key={index} className="mb-8 text-center">
            <h2 className="text-xl font-medium">{member.name}</h2>
            <hr className="my-2 border-gray-500 mx-auto w-1/2" />
            <p className="text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
