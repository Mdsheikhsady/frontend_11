import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside className='w-50'>
    <h1 className='text-4xl text-primary font-bold'>PetMart</h1>
    <p>
      PetMart
      <br />
      PetMart connects local pet owners and buyers for adoption and pet care products.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Adoption</a>
    <a className="link link-hover">Pet Care</a>
    <a className="link link-hover">Pet Accessories</a>
    <a className="link link-hover">Pet Food</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">About Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
  </nav>
</footer>
<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Sady</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;