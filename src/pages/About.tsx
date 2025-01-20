import React from "react";

const About = () => {
  // Team member data stored in an array
  const teamMembers = [
    {
      avatar: "https://media.istockphoto.com/id/638444908/photo/portrait-of-businessman-near-the-window.jpg?s=612x612&w=is&k=20&c=SbapHDc-TAq6ldl4WUPusQOb0rbm3ikbeP6FpZe9K5A=",
      name: "John Doe",
      role: "CEO & Founder",
      bio: "John is the visionary behind our company, bringing years of experience in the bike rental industry.",
    },
    {
      avatar: "https://www.shutterstock.com/image-photo/portrait-mid-adult-business-man-260nw-2229469615.jpg",
      name: "Jane Smith",
      role: "Marketing Manager",
      bio: "Jane leads our marketing efforts, ensuring that we connect with the right audience and grow our community.",
    },
    {
      avatar: "https://media.istockphoto.com/id/1128210778/photo/young-businessman-typing-on-the-smart-phone.jpg?s=612x612&w=is&k=20&c=QRCWr3lZoZm5Al1WWcgGZ7SuJDTi_a0NiZiXcQZzI7I=",
      name: "Alex Johnson",
      role: "Operations Manager",
      bio: "Alex oversees the daily operations, ensuring everything runs smoothly for our customers.",
    },
  ];

  return (
    <div>
      {/* Hero Section with background image */}
      <section
        style={{
          backgroundImage:
            "url('https://triumphtoursthailand.com/wp-content/uploads/2019/07/Triumph-tours-thailand-54-845x321.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
        className="flex justify-center items-center text-white bg-black bg-opacity-40"
      >
        <h1 className="text-5xl font-extrabold leading-tight">About Us</h1>
      </section>

      {/* Mission Statement */}
      <section className="p-12 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-6 text-gray-900">Our Mission</h2>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
          Our platform is dedicated to providing exceptional bike rental services that promote adventure, sustainability,
          and community. We are passionate about providing our customers with the best riding experience and connecting
          them with the joy of cycling.
        </p>
      </section>

      {/* Team Section */}
      <section className="p-12 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-10 text-gray-900">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="rounded-full mb-6 w-32 h-32 object-cover mx-auto border-4 border-[#0bba48]"
              />
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
              <p className="text-gray-500 mt-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History & Milestones */}
      <section className="p-12 bg-gray-100">
        <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Our Journey</h2>
        <ul className="list-disc pl-10 text-lg space-y-4 text-gray-700">
          <li>2010: Company Founded</li>
          <li>2015: Expanded to multiple cities</li>
          <li>2020: Over 10,000 bikes rented</li>
          <li>2023: Introduced electric bikes to our fleet</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="p-12 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-6 text-gray-900">Contact Us</h2>
        <div className="text-center text-lg text-gray-600">
          <p className="mb-4">Address: 123 Adventure St., Bike City, USA</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <p className="mb-4">Email: contact@bikerentals.com</p>
        </div>
      </section>
    </div>
  );
};

export default About;
