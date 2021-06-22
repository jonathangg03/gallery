import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="row p-2">
      <div className="container">
        <div className="row">
          <FaGithub className="col-4 col-md-12 mb-2 mt-2 fs-3" />
          <FaInstagram className="col-4 col-md-12 mb-2 mt-2 fs-3" />
          <FaTwitter className="col-4 col-md-12 mb-2 mt-2 fs-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
