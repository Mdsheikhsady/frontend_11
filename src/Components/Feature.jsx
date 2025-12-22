import React from "react";

const Feature = () => {
  return (
    <div className="py-16 bg-gray-100">
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
              Become part of a caring community that supports people in critical
              moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
