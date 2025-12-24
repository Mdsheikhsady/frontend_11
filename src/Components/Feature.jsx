import React from "react";

const Feature = () => {
  return (
    <>
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Our Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Support Campaigns"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Support Our Campaigns
              </h3>
              <p className="text-gray-600">
                Highlight ongoing blood donation campaigns and special
                initiatives. Learn how you can participate, donate, or help
                spread awareness to save lives.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://img.freepik.com/free-vector/happy-world-blood-donor-day-red-white-background-social-media-design-banner-free-vector_1340-21649.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Blood Donation Facts"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Did You Know?</h3>
              <p className="text-gray-600">
                Discover important facts about blood donation, common myths,
                real statistics, and how a single donation can save multiple
                lives.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzvaB5LbxQGK1-AWjS2HiYZxLzUVgnDeyw&s"
              alt="Success Stories"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
              <p className="text-gray-600">
                Read inspiring stories from donors and recipients whose lives
                were changed through blood donation and community support.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
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
    </>
  );
};

export default Feature;
