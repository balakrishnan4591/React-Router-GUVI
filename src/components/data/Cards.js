import { items } from "./data.js";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import "./Cards.css";

const Cards = (props) => {
  return (
    <>
      <div className="row">
        <div className="card-text">
          <div style={{ float: "left" }}>
            <h4>{props.tex}</h4>
          </div>
          <div style={{ float: "right" }}>
            <Link to={props.sel}>
              <button>View All</button>
            </Link>
          </div>
        </div>
      </div>
      {items.map((item, index) => {
        if (item.tech === props.sel) {
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
    </>
  );
};

export default Cards;
