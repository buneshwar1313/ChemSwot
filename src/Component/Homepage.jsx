import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="chem_swot_title">
            <p style={{ fontSize: "2.5rem",color:'red',fontWeight:'bold' }}>Chem</p><p style={{ fontSize: "2.5rem" }}>Swot</p>
            </div>
           
          </div>
          <div className="col-9">
            <div className="Services">
              <p>Home</p>
              <p>Resources</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
