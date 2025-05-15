
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AuthFormProps {
  mode: "login" | "register";
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    age: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, we would call the backend API here
    // For demonstration purposes, we'll just show a toast
    toast({
      title: mode === "login" ? "Login attempted" : "Registration attempted",
      description: "This would connect to your Spring Boot backend in a real application.",
    });
    
    console.log("Form data:", formData);
  };

  return (
    <div className="card-maatri bg-white/90 w-full max-w-md mx-auto p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-maatri"
          />
        </div>
        
        {mode === "register" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Your mobile number"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="input-maatri"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Your age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="input-maatri"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Your city"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="input-maatri"
                />
              </div>
            </div>
          </>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            required
            value={formData.password}
            onChange={handleChange}
            className="input-maatri"
          />
        </div>
        
        <Button type="submit" className="btn-maatri w-full">
          {mode === "login" ? "Continue" : "Register"}
        </Button>
        
        {mode === "login" ? (
          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-maatri-dark font-medium hover:underline">
              Register
            </Link>
          </p>
        ) : (
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-maatri-dark font-medium hover:underline">
              Login
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
