
import { Link } from "react-router-dom";

const Button1 = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="flex justify-center">
      <Link
        to={link}
        className="block text-center px-5 py-1 bg-[#0bba48] text-white font-medium rounded transition-all duration-300 hover:bg-green-950"
        
      >
        {name}
      </Link>
    </div>
  );
};

export default Button1;
