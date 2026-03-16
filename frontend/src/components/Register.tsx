import React, { useState } from "react";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(form);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              name="name"
              required
              placeholder="John Doe"
              className="w-full border border-slate-300 p-2.5 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full border border-slate-300 p-2.5 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full border border-slate-300 p-2.5 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Select Role</label>
            <select
              name="role"
              className="w-full border border-slate-300 p-2.5 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white transition"
              onChange={handleChange}
              value={form.role}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 active:transform active:scale-[0.98] transition disabled:opacity-70 mt-2"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <span 
            className="text-green-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;