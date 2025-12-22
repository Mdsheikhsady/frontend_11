import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
  
      <footer className="bg-red-700 text-red-00">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Blood Donation
            </h3>
            <p className="text-sm text-white">
              A platform to connect blood donors with people in need and save
              lives together.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Useful Links
            </h4>
            <ul className="space-y-2 text-white">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/search" className="hover:text-green">Search Donors</Link></li>
              <li><Link to="/register" className="hover:text-grey">Become a Donor</Link></li>
              <li><Link to="/dashboard" className="hover:text-grey">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Support
            </h4>
            <p className=" text-white"> +880 4242424242</p>
            <p className=" text-white"> sad@donationblood.org</p>
          </div>
        </div>

        <div className="text-center py-4 border-t border-red-900 text-sm">
          © 2025 Blood Donation . All rights reserved Sady.
        </div>
      </footer>

  );
};

export default Footer;