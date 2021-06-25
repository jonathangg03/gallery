import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="row p-2">
      <div className="row text-center">
        <p className="col pt-3">jona03g97@gmail.com</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 mb-2 mt-2 fs-3 text-center">
            <a href="https://github.com/jonathangg03" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="col-4 mb-2 mt-2 fs-3 text-center">
            <a
              href=""
              href="https://www.instagram.com/jonathangg_03/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="col-4 mb-2 mt-2 fs-3 text-center">
            <a href="" href="https://twitter.com/jonathangg_03" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
