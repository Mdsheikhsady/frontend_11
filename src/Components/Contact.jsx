import React from "react";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
               Phone: <span className="font-semibold">+880 4242424242</span>
            </p>
            <p className="mb-2 text-gray-700">
              Email: sady@blooddonatio.org
            </p>
            <p className="text-gray-700"> Address: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
