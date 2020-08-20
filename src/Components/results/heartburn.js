import React from "react";
import { connect } from "react-redux";

const HeartburnResult = ({ age, symptom }) => {
  return (
    <div>
      <div
        className={
          (age === "2" && symptom === "Heartburn") ||
          (age === "5" && symptom === "Heartburn")
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Heartburn Products for Toddlers </h3>
        <p>
          At this young a age, the only available remedies are antacids to
          decrease the acid in the child's stomach.
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <div className="product">
          <div className="productDetails">
            <h4> Pepto Kids Chewable </h4>
            <p>Usual dosage: Up To 3 Tablets Daily</p>
            <a href="https://www.amazon.com/Pepto-Bismol-Indigestion-Heartburn-Bubblegum/dp/B00MBABLZ0/ref=sr_1_4_0o_na?dchild=1&fpw=fresh&keywords=children%27s+heartburn&qid=1597884316&sr=8-4">
              Link to buy
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81FyDJQbByL._SL1500_.jpg"
            alt="stomach medicine"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age !== "2" && symptom === "Heartburn" && age !== "5"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Heartburn Products for Adults/ Teens </h3>
        <p>
          Heartburn products can be categorized into antacids, h2 blockers and
          proton pump inhibitors. Proton pump inhibitors or PPI's are best for
          treating heartburn longterm. For quick relief antacids and h2 blockers
          are best.
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <div className="product">
          <div className="productDetails">
            <h4> Pepcid Complete </h4>
            <p>Usual dosage: 1-2 Tablets Daily</p>
            <a href="https://www.amazon.com/Pepcid-Complete-All-Day-Heartburn-Flavored/dp/B00006J3G2/ref=sr_1_1?dchild=1&fpw=fresh&keywords=pepcid+complete&qid=1597884646&s=amazonfresh&sr=1-1">
              Link to buy
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/810Pvfop7xL._AC_SL1500_.jpg"
            alt="stomach medicine"
            height={400}
            width={300}
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

export default connect(mapState)(HeartburnResult);
