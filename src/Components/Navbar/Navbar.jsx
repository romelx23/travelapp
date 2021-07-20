import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

// import eye from '../public/assets/icons/eye.svg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#6563ff"
                  d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
                />
              </svg>
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/search">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 13V20H4V6H9.02C9.07 5.29 9.24 4.62 9.5 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V15L18 13ZM16.5 18H5.5L8.25 14.47L10.21 16.83L12.96 13.29L16.5 18ZM19.3 8.89C19.74 8.19 20 7.38 20 6.5C20 4.01 17.99 2 15.5 2C13.01 2 11 4.01 11 6.5C11 8.99 13.01 11 15.49 11C16.37 11 17.19 10.74 17.88 10.3L21 13.42L22.42 12L19.3 8.89ZM15.5 9C14.12 9 13 7.88 13 6.5C13 5.12 14.12 4 15.5 4C16.88 4 18 5.12 18 6.5C18 7.88 16.88 9 15.5 9Z"
                  fill="#fff"
                />
              </svg>
              Search
            </Link>
          </li>
            <div className="btn__decoration">
          <li className="navbar__item__center animate__btn">
            <Link to="/experience">+</Link>
          </li>
            </div>
          <li className="navbar__item">
            <Link to="/tours">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M22,5.08A3.08,3.08,0,0,0,16.74,2.9L13.93,5.71,7.44,3.55a1,1,0,0,0-1,.24L4.06,6.15a1,1,0,0,0,.29,1.61l5.18,2.35-2.6,2.6-1.71-.86A1,1,0,0,0,4.06,12L2.29,13.81a1,1,0,0,0,0,1.41l6.49,6.49a1,1,0,0,0,1.41,0L12,19.94a1,1,0,0,0,.19-1.16l-.86-1.71,2.6-2.6,2.35,5.18a1,1,0,0,0,1.61.29l2.36-2.36a1,1,0,0,0,.24-1l-2.16-6.49L21.1,7.26A3.05,3.05,0,0,0,22,5.08Zm-2.32.77L16.44,9.09a1,1,0,0,0-.24,1l2.16,6.48-.9.9-2.35-5.17a1,1,0,0,0-.73-.57,1,1,0,0,0-.89.28L9.37,16.17a1,1,0,0,0-.19,1.15L10,19l-.56.56L4.41,14.52,5,14l1.71.86a1,1,0,0,0,1.15-.19L12,10.51a1,1,0,0,0-.29-1.62L6.5,6.54l.9-.9L13.88,7.8a1,1,0,0,0,1-.24l3.24-3.24a1.07,1.07,0,0,1,1.53,0,1,1,0,0,1,.32.76A1.06,1.06,0,0,1,19.68,5.85Z"
                />
              </svg>
              Tours
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/save">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"
                />
              </svg>
              Saves
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
