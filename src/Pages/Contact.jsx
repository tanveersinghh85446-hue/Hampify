import { useState } from "react";
import Button from "../Components/Button";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real API call to send the message
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-2xl font-bold text-[#14140F] mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 mb-6">
          Have a question about an order, bulk gifting, or partnerships?
          We'd love to hear from you.
        </p>

        <div className="flex flex-col gap-3 text-sm text-gray-600">
          <p>📧 support@hampify.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 New Delhi, India</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        {submitted ? (
          <p className="text-sm font-semibold text-green-600">
            Thanks for reaching out! We'll get back to you within 24 hours.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Your Message"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E] resize-none"
            />
            <Button type="submit" variant="primary" fullWidth>
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;