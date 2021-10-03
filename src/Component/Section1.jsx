import React from "react";
import "./Homepage.css";
const Section1 = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div>
                <p
                  style={{ color: "red", marginTop: "2rem", fontSize: "2rem" }}
                >
                  Welcome to IB chemistry
                </p>

                <div className="title">
                  <p className="title1">
                    <b>Structured Complete Course In Ib Chemistry</b>
                  </p>
                </div>
                <p className="title2">
                  Learn from the best having 20+ Years experience
                </p>
                <div>
                  <button className="button"> Buy Now</button>
                </div>
                
              </div>
            </div>
            <div className="col-5">
              <div className="Image">
              <img src="./img/Img1.png" alt="Logo"  />
              </div>
                  
                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
