import React from "react";
import { connect } from "react-redux";

const MigraineResult = ({ age, symptom }) => {
  return (
    <div>
      <div
        className={
          age === 5 || (age === 2 && symptom === "Migraine")
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Migraine/ Headache Products For Children/ Toddlers </h3>
        <p>
          Products available without a prescription for migraines are limited
          but first line options include ibuprofen and acetaminophen products
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <h4> Children's Advil </h4>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81Lb26FYOUL._AC_SL1500_.jpg"
          alt="cold medicine"
          height ={400}
          width = {300}
        />
        <a href="https://www.amazon.com/Advil-Childrens-Reliever-Ibuprofen-Suspension/dp/B005260IGS/ref=sr_1_1?almBrandId=QW1hem9uIEZyZXNo&dchild=1&fpw=alm&keywords=children%27s+ibuprofen&qid=1597848031&s=amazonfresh&sr=1-1">
          Link to buy
        </a>
        <hr />
      </div>
      <div
        className={
          age !== 5 && age !== 2 && symptom === "Migraine"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Migraine/ Headache Products For Adults </h3>
        <p>
          Products available without a prescription for migraines are limited
          but first line options include ibuprofen and acetaminophen products
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <h4> Ibuprofen </h4>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71rBmjlZOHL._AC_SL1500_.jpg"
          alt="cold medicine"
          height ={400}
          width = {300}
        />
        <a href="https://www.amazon.com/Basic-Care-Ibuprofen-Tablets-Count/dp/B074F297T8/ref=sr_1_1?almBrandId=QW1hem9uIEZyZXNo&dchild=1&fpw=alm&keywords=ibuprofen&qid=1597848192&s=amazonfresh&sr=1-1">
          Link to buy
        </a>
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

export default connect(mapState)(MigraineResult);
