import "./Pages.css";
import { items } from "./data";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";

const CyberSecurity = () => {
  return (
    <>
      <div className="row">
        <h3 style={{ textAlign: "center" }}>Cyber Security</h3>
      </div>
      <div className="row">
        {items.map((item, index) => {
          if (item.tech === "cybersecurity") {
            return (
              <div className="col-md-4" key={index}>
                <Link to={item.redireto}>
                  <div className="card">
                    <div className="row">
                      <span
                        style={{
                          position: "absolute",
                          textAlign: "right",
                          paddingLeft: "20px",
                        }}
                      >
                        <strong
                          style={{
                            border: "1px solid white",

                            borderRadius: "20px",
                            backgroundColor: "white",
                            fontSize: "10px",
                            color: "black",
                            padding: "3px",
                          }}
                        >
                          <ImEye /> {item.views}
                        </strong>
                      </span>
                      <img src={item.src} className="card-img-top" alt="..." />

                      <p className="card-title">{item.title}</p>
                      <br />
                      <p className="card-text">
                        <div style={{ float: "left" }}>{item.date}</div>
                        <div style={{ float: "right" }}>{item.time}</div>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
export default CyberSecurity;
