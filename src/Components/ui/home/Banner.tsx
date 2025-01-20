import Button1 from "../Button1";

const Banner = () => {
  return (
    <div>
      {/* Hero Section with background image */}
      <section
        style={{
          backgroundImage:
            "url('https://robbreport.com/wp-content/uploads/2020/01/4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Fullscreen height
        }}
        className="flex justify-center items-center text-white bg-black bg-opacity-40"
      >
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Enjoy Your Tour by Bikes
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 opacity-90">
            Explore the scenic routes and experience the thrill of biking. Rent
            a bike today and start your adventure!
          </p>
          <Button1 name="Rent Now" link="" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
