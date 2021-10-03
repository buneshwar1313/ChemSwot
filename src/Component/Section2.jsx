import React from "react";

import './Homepage.css';
const Section2 = () => {
  return (
    <>
     <div className="container">
       <div className="row">
         <p style={{fontSize:'2rem',color:'red',paddingTop:'3rem',fontWeight:'bold'}}>FEATURES</p>
       </div>
     <div className="row">
        <div className="col">
          <p className="main_title"><b>Chemswot Offers the Following Main Benifits</b></p>
        </div>
        <div className="col">
          <p style={{fontSize:'1.7rem',color:'gray'}}>
            Our Resources will help you achieve your dream Ib diploma score by
            our accurate topic detail capturing
          </p>
        </div>

      </div>

      <div className="row">
        <div className="col">
          <div className="card">
            <img src="./img/Note.png" className="img" />
          <p className="head">Accurate Notes</p>
            <p className="txt">Includes designed</p>
            <p className="txt">Mindmaps and puzzles</p>
          </div>
         
        </div>
        <div className="col">
        <div className="card">
          <img src="./img/ppt.png" alt=""  className="img"/>
          <p className="head">Animated PPT's</p>
            <p className="txt">Includes textbook</p>
            <p className="txt">questions and examples</p>
          </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="./img/Quiz.png" className="img" />
            <p className="head">Topicwise Quiz</p>
                <p className="txt">Includes MCQ Paper 1</p>
                <p className="txt">type questions</p>
            </div>
        </div>
      </div>
     </div>
      
    </>
  );
};

export default Section2;
