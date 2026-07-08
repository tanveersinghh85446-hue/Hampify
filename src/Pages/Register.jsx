import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useAuth } from "../Context/AuthContext";
import { useToast } from "../Context/ToastContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // Replace with real registration call
    register(form.name, form.email);
    showToast("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h1 className="text-xl font-bold text-[#14140F] mb-1">
          Create your account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Join Hampify and start gifting hampers your loved ones will
          remember.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
          />
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
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
          />

          {error && <p className="text-xs text-red-500">{error}</p>}

          <Button type="submit" variant="primary" fullWidth>
            Create Account
          </Button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0C3B2E] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;