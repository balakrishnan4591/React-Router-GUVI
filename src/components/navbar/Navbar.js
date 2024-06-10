import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const gotToNewPage = (url) => {
    window.open(url);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Blog
                </a>
              </li>
              <li>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </li>
            </ul>

            <button
              className="btn btn-success"
              onClick={() => gotToNewPage("/register")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
