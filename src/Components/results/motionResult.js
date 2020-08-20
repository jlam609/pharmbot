import React from "react";
import { connect } from "react-redux";

const MotionResult = ({ age, symptom }) => {
  return (
    <div>
      <div
        className={
          age === "5" && symptom === "Motion Sickness" || (age === "2" && symptom === "Motion Sickness")
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Motion Sickness Remedies for children/ babies</h3>
        <p>
          Seabands and motion sickness bands are recommended for children and babies
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <div className="product">
          <div className="productDetails">
        <h4> Sea-Band</h4>
        <p>Usual Dosage: Use as directed</p>
        <a href="https://www.amazon.com/Sea-Band-Wristband-Anti-Nausea-Acupressure-Sickness/dp/B004L4D0DU/ref=sr_1_5?crid=2SAWLATYKXFC4&dchild=1&keywords=motion+sickness+bands+for+kids&qid=1597888982&sprefix=motion+sickness+b%2Caps%2C193&sr=8-5">
          Link to buy
        </a>
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81VyLy9J-LL._AC_SL1500_.jpg"
          alt="cold medicine"
          height ={400}
          width = {300}
        />
        </div>
        <hr />
      </div>
      <div
        className={
          age !== "5" && age !== "2" && symptom === "Motion Sickness"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Motion Sickness Products For Adults </h3>
        <p>
          First line remedy for motion sickness is dramamine and bonine or any product containing meclizine
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <div className="product">
          <div className="productDetails">
        <h4> Dramamine All Day Less Drowsy Relief </h4>
        <p>Usual Dosage: 1 Tablet Daily</p>
        <a href="https://www.amazon.com/Dramamine-Motion-Sickness-Drowsey-Formula/dp/B007BF7BUY/ref=sr_1_2?crid=1ZD8G9OUKSYC6&dchild=1&keywords=dramamine&qid=1597889205&sprefix=drama%2Caps%2C170&sr=8-2">
          Link to buy
        </a>
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91UL-NvPQfL._AC_SL1500_.jpg"
          alt="cold medicine"
          height ={400}
          width = {300}
        />
        </div>
        <hr />
      </div>
    </div>
  );
};

const mapState = ({ age, symptom }) => {
  return {
    age,
    symptom,
  };
};

export default connect(mapState)(MotionResult);