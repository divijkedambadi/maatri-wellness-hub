
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen maatri-gradient">
      <div className="container-maatri py-8">
        <div className="flex justify-center">
          <Logo />
        </div>
      </div>
      
      <div className="container-maatri flex flex-col items-center justify-center min-h-[80vh] py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Welcome to <span className="text-gradient">maatri</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-slate-700 mb-12 opacity-0 animate-fade-in-up-delayed">
          Hello healthy to-be-MOMs
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fade-in-up-delayed-more">
          <Link to="/register">
            <button className="btn-maatri">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn-maatri-outline">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
