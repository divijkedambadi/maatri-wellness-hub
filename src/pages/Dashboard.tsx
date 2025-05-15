
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/api";
import { useToast } from "@/components/ui/use-toast";
import Logo from "@/components/Logo";

interface UserProfile {
  id: number;
  email: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await authService.getProfile();
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        toast({
          title: 'Session Expired',
          description: 'Please log in again',
          variant: 'destructive',
        });
        authService.logout();
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, toast]);

  const handleLogout = () => {
    authService.logout();
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out',
    });
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen maatri-gradient flex items-center justify-center">
        <div className="text-center">
          <p className="text-maatri-dark text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen maatri-gradient">
      <div className="container-maatri py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <button 
            onClick={handleLogout}
            className="btn-maatri-outline"
          >
            Log out
          </button>
        </div>
      </div>
      
      <div className="container-maatri py-8">
        <div className="card-maatri max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome to Maatri</h1>
          
          {profile && (
            <div className="mb-8">
              <p className="text-lg mb-2">Hello, <span className="font-semibold">{profile.email}</span></p>
              <p className="text-maatri-dark">Thank you for joining our community for healthy moms!</p>
            </div>
          )}
          
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="card-maatri bg-maatri-light/30 p-6">
              <h2 className="font-semibold text-xl mb-3">Your Pregnancy Journey</h2>
              <p>Track your progress and learn what to expect during your pregnancy.</p>
              <button className="btn-maatri w-full mt-4">Explore</button>
            </div>
            
            <div className="card-maatri bg-maatri-light/30 p-6">
              <h2 className="font-semibold text-xl mb-3">Health Tips</h2>
              <p>Discover helpful information to keep you and your baby healthy.</p>
              <button className="btn-maatri w-full mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
