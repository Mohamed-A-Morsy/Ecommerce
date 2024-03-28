import React from "react";
import amazon from "../../images/amazon-pay.png";
import masterCard from "../../images/MasterCard_Logo.svg.png";
import payPal from "../../images/paypalLogo.jpeg";



export default function Footer() {
  return (
    <>
     <div className="bg-body-tertiary">
     <div className="container py-5 ">
        <div className="row">
          <div className="col-md-12">
            <div className="footer py-3">
              <h2>Get The FreshCart app</h2>
              <p>We will send you a link, open it on your phone to download the app.</p>
              <div className="d-flex  justify-content-between">
                <input  className="form form-control w-75" type="text" placeholder="Email"/>
                <button className="btn bg-main text-white " >Share App Link</button>
                
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="leftPart d-flex align-items-center">
                <p className="h5">Payment Partne</p>
                  <figure>
                  <span>
                    <img className="mx-3" style={{height:"50px",width:"70px",borderRadius:"50%"}}   src={amazon} alt="amazon" />
                   </span>
                   <span>
                    <img className="mx-3" style={{height:"40px",width:"70px",}}   src={masterCard} alt="amazon" />
                   </span>
                   <span>
                    <img className="mx-3" style={{height:"40px",width:"50px",}}   src={payPal} alt="amazon" />
                   </span>
                  </figure>
                </div>
                <div className="rightPart d-flex">
                  <p>Get deliveries with FreshCart</p>

                  <img className="ps-2" style={{width:"150px",height:"40px"}} src={require("../../images/appstore.png")} alt="" />
                  <img className="ps-2" style={{width:"150px",height:"40px"}} src={require("../../images/google-play.png")} alt="" />

                </div>
              </div>
<hr />

            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
