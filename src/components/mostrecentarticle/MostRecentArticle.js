import "./MostRecentArticle.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cards from "../data/Cards";

const MostRecentArticle = () => {
  const [sidebarVal, setSidebarVal] = useState("aiml");
  const [sidebarTitle, setSidebarTitle] = useState("AI & ML");

  const handleChange = (e, d) => {
    setSidebarVal(e);
    setSidebarTitle(d);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <p className="card-top-title">Most Recent Articles</p>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="row">
              <img
                src="https://onlinecs.baylor.edu/sites/default/files/field/image/shutterstock_2108122673%20-%201200x628%2016_9%20%281%29.jpg"
                className="card-img-top"
                alt="..."
              />

              <p className="card-title">
                How to Setup React Native Environment?: A Step-by-Step Guide
              </p>
              <br />
              <p
                className="card-text "
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div style={{ float: "left" }}>17 Feb, 2024</div>
                <div style={{ float: "right" }}>23 Min Read</div>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <Link to="./steps-to-setup-react-native-environment">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="card-title">
                      How to Setup React Native Environment?: A Step-by-Step
                      Guide
                    </p>
                    <br />
                    <p className="card-text">
                      <div style={{ float: "left" }}>07 Jan, 2024</div>
                      <div style={{ float: "right" }}>3 Min Read</div>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="./guide-for-reactjs-architecture">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxuTflS9QMiU1GNHA1bNkZjpWTrKNzobtlg&s"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="card-title">
                      ReactJS Architecture: A Comprehensive Guide For Developers
                    </p>
                    <br />
                    <p className="card-text">
                      <div style={{ float: "left" }}>23 May, 2024</div>
                      <div style={{ float: "right" }}>13 Min Read</div>
                    </p>
                  </div>
                </div>
              </div>{" "}
            </Link>
          </div>
          <div className="row">
            <Link to="./build-a-command-line-interface-with-nodejs">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://kinsta.com/wp-content/uploads/2021/05/what-is-node-js-featured-image.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="card-title">
                      How to Build a Command Line Interface with Node.js: A
                      Complete Guide
                    </p>
                    <br />
                    <p className="card-text">
                      <div style={{ float: "left" }}>07 Feb, 2024</div>
                      <div style={{ float: "right" }}>30 Min Read</div>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="row" id="sidebar">
        <div className="col-md-3">
          <ul
            id="nav"
            class="nav flex-column"
            onClick={(e) => handleChange(e.target.value, e.target.text)}
          >
            <li class="nav-item">
              <option value="trending">Trending Articles</option>
            </li>
            <li class="nav-item">
              <option value="aiml">AI & ML</option>
            </li>
            <li class="nav-item">
              <option value="blockchain">Blockchain</option>
            </li>
            <li class="nav-item">
              <option value="cloudcomputing">Cloud Computing</option>
            </li>
            <li class="nav-item">
              <option value="cybersecurity">Cyber Security</option>
            </li>
            <li class="nav-item">
              <option value="datascience">Data Science</option>
            </li>
            <li class="nav-item">
              <option value="devops">DevOps</option>
            </li>
            <li class="nav-item">
              <option value="digitalmarketing">Digital Marketing</option>
            </li>
            <li class="nav-item">
              <option value="fsd">Full Stack Development</option>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <div className="row">
            <Cards sel={sidebarVal} tex={sidebarTitle} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MostRecentArticle;
