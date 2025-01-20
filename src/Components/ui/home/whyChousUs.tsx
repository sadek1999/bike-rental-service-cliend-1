import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Reliable Service",
      description:
        "We provide reliable and timely bike rentals, ensuring that our customers get the best experience every time.",
      icon: "🚲",
    },
    {
      title: "Affordable Prices",
      description:
        "Our rental prices are competitive and affordable, giving you great value for money.",
      icon: "💰",
    },
    {
      title: "Wide Selection of Bikes",
      description:
        "We offer a wide range of bikes to choose from, whether you need a sports bike, cruiser, or city bike.",
      icon: "🏍️",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our friendly customer support team is available 24/7 to assist you with any questions or concerns.",
      icon: "📞",
    },
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-serif font-bold text-center mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg text-center"
            style={{ border: '1px solid #e0e0e0' }}
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
