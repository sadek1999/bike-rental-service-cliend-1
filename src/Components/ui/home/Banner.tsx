const Banner = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://robbreport.com/wp-content/uploads/2020/01/4.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Enjoy Your Tour by Bikes
            </h1>
            <p className="mb-5 text-lg text-white">
              Explore the scenic routes and experience the thrill of biking. Rent
              a bike today and start your adventure!
            </p>
            <button
              className="btn"
              style={{
                backgroundColor: "#9ce528", // Primary color
                borderColor: "#9ce528", // Match the border color to primary color
                color: "#ffffff",
              }}
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  