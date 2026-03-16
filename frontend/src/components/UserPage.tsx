import React, { useEffect, useState } from "react";
import { getUserByEmail, logoutUser } from "../services/authService";
import { getEmailFromToken } from "../utils/jwt";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface User {
  name: string;
  email: string;
}

const UserPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const email = getEmailFromToken();

        if (!email) {
          navigate("/");
          return;
        }

        const data = await getUserByEmail(email);
        setUser(data);
      } catch (error) {
        toast.error("Failed to load profile");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl shadow-blue-100/50 rounded-2xl p-8 w-full max-w-md border border-slate-100">
        
        {loading ? (
          <div className="flex flex-col items-center py-10 space-y-4">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium">Fetching profile...</p>
          </div>
        ) : user ? (
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg shadow-blue-200">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-1">
              User Dashboard
            </h2>
            <p className="text-slate-500 text-sm mb-8">Manage your account details</p>

            <div className="w-full space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</p>
                <p className="text-slate-800 font-medium text-lg">{user.name}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                <p className="text-slate-800 font-medium text-lg">{user.email}</p>
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-6 bg-white border-2 border-red-100 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-50 hover:border-red-200 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
             <p className="text-red-500">User not found.</p>
             <button onClick={() => navigate('/')} className="text-blue-600 underline mt-2">Go back</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;