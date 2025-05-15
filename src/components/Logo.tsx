
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-gradient">maatri</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
