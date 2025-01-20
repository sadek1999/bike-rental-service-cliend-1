import React from "react";

const Review = () => {
  const reviews = [
    {
      avatar: "https://media.istockphoto.com/id/1329031407/photo/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-happy-guy-enjoying.jpg?s=612x612&w=0&k=20&c=WvjAEx3QlWoAn49drp0N1vmxAgGObxWDpoXtaU2iB4Q=", // Replace with actual avatar URL
      name: "John Doe",
      comment: "This is a fantastic service! Highly recommended.",
    },
    {
      avatar: "https://www.indoasia-hotels.com/assets/img/blog/011.jpg", // Replace with actual avatar URL
      name: "Jane Smith",
      comment: "I love how easy it was to rent a bike. Amazing experience!",
    },
    {
      avatar: "https://via.placeholder.com/150?text=AJ", // Replace with actual avatar URL
      name: "Alex Johnson",
      comment: "The bikes are well-maintained and the staff is very friendly.",
    },
  ];

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white shadow-md rounded-lg p-4 gap-4"
          >
            {/* Avatar Section */}
            <div>
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Comment Section */}
            <div>
              <h4 className="font-semibold text-gray-800">{review.name}</h4>
              <p className="text-gray-600 mt-1">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
