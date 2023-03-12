import React from 'react';

const Footer = () => {
  return (
    <footer className="row mx-auto p-4">
      <div className="col-md-3 d-flex flex-column align-items-center mx-auto">
        <h3>About Us</h3>
        <a className="my-2">News</a>
        <a className="mb-2">Careers</a>
        <a className="mb-2">Investors</a>
        <a className="mb-2">Purpose</a>
        <a className="mb-2">Sustainability</a>
      </div>
      <div className="col-md-3 d-flex flex-column align-items-center mx-auto">
        <h3 className="mt-3 mt-md-0">Get Help</h3>
        <a className="my-2">Order Status</a>
        <a className="mb-2">Shipping & Delivery</a>
        <a className="mb-2">Payment Options</a>
        <a className="mb-2">Gift Card Balance</a>
        <a className="mb-2">Contact Us</a>
        <a className="mb-2">FAQ</a>
        <a className="mb-2">Blog</a>
      </div>
      <div className="col-md-3 d-flex flex-column align-items-center mx-auto">
        <h3 className="mt-3 mt-md-0">Company</h3>
        <a className="my-2">Gift Cards</a>
        <a className="mb-2">Promotions</a>
        <a className="mb-2">Find A Store</a>
        <a className="mb-2">Signup</a>
        <a className="mb-2">Nike Journal</a>
        <a className="mb-2">Send Us Feedback</a>
      </div>
    </footer>
  );
};

export default Footer;
