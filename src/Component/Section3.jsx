import React from 'react'
import './Homepage.css'
const Section3 = () => {
    return (<>
     <div className="session3">
     <div className="container">
            <p style={{fontSize:'2rem',color:"red",paddingTop:'3rem',fontWeight:'bold'}}>
            OFFERS BY CHEMSWOT
            </p>
            <div className="new">
            <div className="row">
                <div className="col-4">
                    <div className='square'>
                    <p style={{fontSize:'3rem'}}>Montly Plan</p>
                    <p>Get all at just 500</p>
                       <button className="final_but">Buy Now</button>
                    </div>
                </div>
                 <div className="col-4">
                       <div className="square2">
                           <img  src="./img/react_logo.png" alt=" "/>
                       </div>
                 </div>
                 <div className="col-4">
                     <div className="square">
                     <p style={{fontSize:'3rem'}}>Yearly Plan</p>
                     <p style={{fontSize:'1.5rem'}}>Get All at Just 5000</p>
                     <button className="final_but">Buy Now</button>
                     </div>
                     

                 </div>
            </div>
            </div>
            
        </div>
     </div>
        

    </>)
}

export default Section3
