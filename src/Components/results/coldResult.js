import React from "react";
import { connect } from "react-redux";

const ColdResult = ({ age, symptom }) => {
  return (
    <div>
      <div
        className={age === 2 && symptom === "Cold/Flu" ? "resultCard" : "ghost"}
      >
        <h3> Sorry We Can't recommend anything! </h3>
        <p>
          {" "}
          At this age the baby will need to see a pediatrician for a proper dose
          recommendation
        </p>
      </div>
      <div
        className={age === 5 && symptom === "Cold/Flu" ? "resultCard" : "ghost"}
      >
        <h3> Child Cold Products </h3>
        <p>
          {" "}
          Look for an appropriate product that has dosing recommendations for
          the child's age. Products containing acetaminophen, ibuprofen are best
          for fever/ pain/ sorethroat.
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <h4> Children's Cold + Cough + SoreThroat </h4>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81G8WTi12UL._AC_SL1500_.jpg"
          alt="cold medicine"
        />
        <a href="https://www.amazon.com/Childrens-Tylenol-Throat-Medicine-Bubblegum/dp/B0758J8Y7D/ref=sr_1_8?dchild=1&keywords=children%27s+cold+medicine&qid=1597844524&s=hpc&sr=1-8">
          Link to buy
        </a>
        <hr />
        <h4> Mucinex Children's MultiSymptom COLD </h4>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81vtaeOvaCL._AC_SL1500_.jpg"
          alt="cold medicine"
          height ={400}
          width = {300}
        />
        <a href="https://www.amazon.com/Mucinex-Multi-Symptom-Dextromethorphan-Guaifenesin-Phenylephrine/dp/B008IYDYXU/ref=sr_1_1_sspa?dchild=1&keywords=children%27s+cold+medicine&qid=1597844709&s=hpc&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQ041NklGN0RVM1lSJmVuY3J5cHRlZElkPUEwMTUyNzM3MjhFUUo1V1I0UDhVWiZlbmNyeXB0ZWRBZElkPUEwODA2Mzk2N09aNTc5M0o3MUtTJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">
          Link to buy
        </a>
        <hr />
      </div>
      <div
        className={
          age !== 2 && age !== 5 && symptom === "Cold/Flu"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Cold Products </h3>
        <p>
          {" "}
          Look for a product that has active ingredients to treat the variety of
          cold/flu symptoms you might experience.
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <h4> DayQuil & Nyquil </h4>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91FzRw%2BM0uL._AC_SL1500_.jpg"
          alt="cold medicine"
          height ={400}
          width = {300}
        />
        <a href="https://www.amazon.com/Vicks-NyQuil-DayQuil-SEVERE-Relief/dp/B00EQA34W6/ref=sr_1_6_0h_fs?almBrandId=QW1hem9uIEZyZXNo&dchild=1&fpw=alm&keywords=nyquil+and+dayquil&qid=1597847578&s=hpc&sr=1-6">
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

export default connect(mapState)(ColdResult);
