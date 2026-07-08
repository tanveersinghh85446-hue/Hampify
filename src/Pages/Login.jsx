import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useAuth } from "../Context/AuthContext";
import { useToast } from "../Context/ToastContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    // Replace with real authentication call
    login(form.email);
    showToast("Logged in successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h1 className="text-xl font-bold text-[#14140F] mb-1">
          Welcome back
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Login to continue gifting happiness.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
          />

          {error && <p className="text-xs text-red-500">{error}</p>}

          <Button type="submit" variant="primary" fullWidth>
            Login
          </Button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#0C3B2E] font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;