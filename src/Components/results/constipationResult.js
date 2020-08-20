import React from "react";
import { connect } from "react-redux";

const ConstipationResult = ({ age, symptom }) => {
  return (
    <div>
      <div
        className={
          age === "5" && symptom === "Constipation"|| (age === "2" && symptom === "Constipation")
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Children’s Constipation Remedies </h3>
        <p>
          Children’s Constipation Remedies are limited but usually include
          glycerin or mineral Oil
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <div className="product">
        <div className="productDetails">
        <h4> Fleet Pedia-Lax Liquid Glycerin Suppositories</h4>
        <p>Usual Dosage: Insert 1 suppository rectally daily as needed</p>
        <a href="https://www.amazon.com/Fleet-Pedia-Lax-Liquid-Glycerin-Suppositories/dp/B01IAI4AJU/ref=sr_1_1_sspa?crid=323H6R8B9H6B1&dchild=1&keywords=childrens+glycerin+suppositories&qid=1597851730&sprefix=glycerin+children+su%2Caps%2C163&sr=8-1-spons&psc=1&smid=ASEVS99O6FS73&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTE4xREU1RjRHSzE2JmVuY3J5cHRlZElkPUEwMDE0MzUyMzdLWjNNNDA2ODVSUyZlbmNyeXB0ZWRBZElkPUEwMzkwNTEyMjRKSElZS1hTVzFLQSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
          Link to buy
        </a>
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71v6rL71FnL._AC_SL1344_.jpg"
          alt="pedia-lax"
          height ={400}
          width = {300}
        />
        </div>
        <hr />
      </div>
      <div
        className={
          age !== "5" && age !== "2" && symptom === "Constipation"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3> Constipation Remedies for Adults </h3>
        <p>
          {`Constipation remedies include a wide selection of products. For best results a combination of a stool softener and stimulant laxative is best. For emergencies enemas are most effective.`}{" "}
        </p>
        <p> Here is our recommendation! </p>
        <br />
        <div className="product">
        <div className="productDetails">
        <h4>Senna Plus Natural Vegetable Laxative Plus Stool Softener</h4>
        <p>Usual Dosage: 2-4 Tablets daily to twice-daily</p>
        <a href="https://www.amazon.com/Natural-Vegetable-Laxative-Softener-Special/dp/B07S9GQPZG/ref=sr_1_8?dchild=1&keywords=senna+lax&qid=1597879753&sr=8-8">
          Link to buy
        </a>
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61Xs1YG0FcL._AC_SL1200_.jpg"
          alt="constipation medicine"
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

export default connect(mapState)(ConstipationResult);
