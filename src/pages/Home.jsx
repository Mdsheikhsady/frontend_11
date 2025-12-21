import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ================= HERO / BANNER ================= */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Donate Blood, Save Lives
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our blood donation community and help people in emergency
            situations. One donation can save multiple lives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Join as a Donor
            </Link>

            <Link
              to="/search"
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition"
            >
              Search Donors
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED SECTION ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Donate Blood?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Save Lives
              </h3>
              <p className="text-gray-600">
                A single blood donation can help save up to three lives during
                emergencies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Easy Process
              </h3>
              <p className="text-gray-600">
                Register, find requests, and donate blood with a simple and
                user-friendly process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Community Support
              </h3>
              <p className="text-gray-600">
                Become part of a caring community that supports people in
                critical moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="bg-white p-6 rounded-xl shadow space-y-4">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button className="btn btn-error w-full text-white">
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-center bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-red-600">
                Get in Touch
              </h3>
              <p className="mb-2 text-gray-700">
                📞 Phone: <span className="font-semibold">+880 1234-567890</span>
              </p>
              <p className="mb-2 text-gray-700">
                📧 Email: support@blooddonation.org
              </p>
              <p className="text-gray-700">
                🏥 Address: Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
