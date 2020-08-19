import React from "react";
import { connect } from "react-redux";

const InsomniaResult = ({ age, symptom }) => {
  return (
    <div>
      <div
        className={
          age === 2 || (age === 5 && symptom === "Insomnia")
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Sorry We Can't recommend anything! </h3>
        <p>
          {" "}
          At this age the baby/ child will need to see a pediatrician for a
          proper dose recommendation
        </p>
      </div>
      <div
        className={
          age !== 5 && age !== 2 && symptom === "insomnia"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Sleep Aid Products for Over 12 Years Old </h3>
        <p>
          Insomnia can be a major problem. Look for a product containing the
          active ingredient Diphenhydramine or Doxylamine to help!
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <h4> Unisom Sleep Gels </h4>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/717Po9pZ9qL._AC_SL1055_.jpg"
          alt="sleep medicine"
          height ={400}
          width = {300}
        />
        <a href="https://www.amazon.com/Unisom-SleepGels-32-Softgels-Box/dp/B004AI35JG/ref=sr_1_7?almBrandId=QW1hem9uIEZyZXNo&dchild=1&fpw=alm&keywords=diphenhydramine&qid=1597848682&s=amazonfresh&sr=1-7">
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
    symptom
  };
};

export default connect(mapState)(InsomniaResult);