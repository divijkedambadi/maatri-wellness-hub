
import Logo from "@/components/Logo";
import AuthForm from "@/components/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen maatri-gradient">
      <div className="container-maatri py-8">
        <div className="flex justify-center">
          <Logo />
        </div>
      </div>
      
      <div className="container-maatri flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in">Login</h1>
          <div className="animate-fade-in-delayed">
            <AuthForm mode="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
