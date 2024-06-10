import "./Signup.css";
import { FcOk } from "react-icons/fc";

const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id="signup-left">
            <div className="inside-col">
              <br />
              <a href="/">
                <img src="https://www.guvi.in/web-build/images/guvi-logo.8eeef9e2027d374479531095b012a87e.svg" />
              </a>
              <br />
              <br />
              <h2>
                Get your First Course for{" "}
                <span id="text-partial">Free with GUVI</span>
              </h2>
              <br />
              <h6>Just follow each step given below:</h6>
              <ul>
                <li>
                  <FcOk /> Sign up with GUVI.
                </li>
                <li>
                  <FcOk /> Confirm your account through email
                </li>
                <li>
                  <FcOk /> You'll receive an unique coupon code in Welcome
                  Email.
                </li>
                <li>
                  <FcOk /> Use the coupon Code to avail your first Premium
                  cource at no cost.
                </li>
              </ul>
              <img
                class="img-fluid"
                src="https://www.guvi.in/web-build/images/signup-banner.5254a64a3857c50f02854154805a864d.png"
              ></img>
            </div>
          </div>
          <div className="col-md-6" id="signup-right">
            <form className="form-login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
