import React from "react";
import { connect } from "react-redux";

const PainResult = ({ age, painResult, symptom, pregnant }) => {
  return (
    <div>
      <div
        className={
          (age === "2" && symptom === "Pain") ||
          (age === "5" &&
            symptom === "Pain" &&
            painResult !== "Chronic/Acute Pain")
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Sorry We Can't Recommend Anything</h3>
        <p>
          {" "}
          At this age the baby will need to see a doctor for pain or just use
          ice/heat in order to help the pain/{" "}
        </p>
        <img
          src="https://ih1.redbubble.net/image.537805895.4162/flat,750x,075,f-pad,750x1000,f8f8f8.u8.jpg"
          alt="sad panda"
          height={600}
          width={400}
        />
        <hr />
      </div>
      <div
        className={
          age === "5" &&
          painResult === "Chronic/Acute Pain" &&
          symptom === "Pain"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Pain Products For Children</h3>
        <p>
          An NSAID or acetaminophen is usually the go to remedy for child pain.
        </p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Children's Tylenol</h4>
            <p>Usual Dosage: Take 1-2 teaspoonfuls every 4-6 hours as needed</p>
            <a href="https://www.amazon.com/Basic-Care-Acetaminophen-Childrens-Suspension/dp/B074F19X93/ref=sr_1_5_mod_primary_new?dchild=1&keywords=children%27s+pain&qid=1597888360&sr=8-5">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/61zDo1dy9HL._AC_SL1000_.jpg"
            alt="pain medication"
            height={400}
            width={300}
          />
        </div>
        <hr />
        <p> Or </p>
        <div className="product">
          <div className="productDetails">
            <h4>Children's Motrin</h4>
            <p>Usual Dosage: Take 1-2 teaspoonfuls every 4-6 hours as needed</p>
            <a href="https://www.amazon.com/Childrens-Motrin-Suspension-Dye-Free-Ibuprofen/dp/B00B4PB0RC/ref=sr_1_3?dchild=1&keywords=children%27s+pain&qid=1597888465&sr=8-3">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/814lW34YnLL._AC_SL1500_.jpg"
            alt="pain medication"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age === "18" &&
          painResult === "Chronic/Acute Pain" &&
          pregnant === "No" &&
          symptom === "Pain"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Pain Products For Adult</h3>
        <p>An NSAID or acetaminophen is usually the go to remedy for pain.</p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Tylenol Extra Stength</h4>
            <p>
              Usual Dosage: Take 1-2 tablets every 6 hours Max Daily Dose: 8
              tablets
            </p>
            <a href="https://www.amazon.com/Tylenol-Extra-Strength-Caplets-Count/dp/B01J24FMIE/ref=sr_1_6?crid=27AC7T7KR3DZU&dchild=1&keywords=tylenol+extra+strength&qid=1597888704&sprefix=tylenol+%2Caps%2C166&sr=8-6">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81lPrJ-kRLL._AC_SL1500_.jpg"
            alt="pain medication"
            height={400}
            width={300}
          />
        </div>
        <hr />
        <p>Or</p>
        <div className="product">
          <div className="productDetails">
            <h4>Ibuprofen</h4>
            <p>
              Usual Dosage: Take 1-4 tablets every 6 hours Max Daily Dose: 18
              tablets
            </p>
            <a href="https://www.amazon.com/Basic-Care-Ibuprofen-Tablets-Count/dp/B074F297T8/ref=sr_1_5?dchild=1&keywords=Ibuprofen&qid=1597888813&sr=8-5">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71rBmjlZOHL._AC_SL1500_.jpg"
            alt="pain medication"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age === "18" &&
          painResult === "Chronic/Acute Pain" &&
          pregnant === "Yes" &&
          symptom === "Pain"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Pain Products For Adult</h3>
        <p>
          When pregnant, NSAIDS should be avoided during certain trimesters and
          only tylenol should be taken
        </p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Tylenol Extra Stength</h4>
            <p>
              Usual Dosage: Take 1-2 tablets every 6 hours Max Daily Dose: 8
              tablets
            </p>
            <a href="https://www.amazon.com/Tylenol-Extra-Strength-Caplets-Count/dp/B01J24FMIE/ref=sr_1_6?crid=27AC7T7KR3DZU&dchild=1&keywords=tylenol+extra+strength&qid=1597888704&sprefix=tylenol+%2Caps%2C166&sr=8-6">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81lPrJ-kRLL._AC_SL1500_.jpg"
            alt="pain medication"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age === "18" && painResult === "Nerve Pain" && symptom === "Pain"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Nerve Pain Products For Adult</h3>
        <p>
          Treatment of choice for nerve pain is any patch containing lidocaine
        </p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Lidocaine Patch </h4>
            <p>
              Usual Dosage: Apply 1 patch for 12 hours on and remove for 12
              hours off
            </p>
            <a href="https://www.amazon.com/HealthWise-Maximum-Strength-Relief-Lidocaine/dp/B07CJH7Z3R/ref=sr_1_5?dchild=1&keywords=lidocaine+patch&qid=1597889460&sr=8-5">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81UM2pOjXOL._AC_SL1500_.jpg"
            alt="pain medication"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age === "18" && painResult === "Muscle Pain" && symptom === "Pain"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Muscle Pain Products For Adult</h3>
        <p>Treatment of choice for muscle pain are creams with menthol</p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Bengay Ultra Stength </h4>
            <p>Usual Dosage: Apply every 3-4 hours as needed</p>
            <a href="https://www.amazon.com/HealthWisehttps://www.amazon.com/Bengay-Stength-Relieving-Non-Greasy-Ultra-Strength/dp/B00J11KRK2/ref=sr_1_5?dchild=1&keywords=Bengay&qid=1597889586&sr=8-5-Maximum-Strength-Relief-Lidocaine/dp/B07CJH7Z3R/ref=sr_1_5?dchild=1&keywords=lidocaine+patch&qid=1597889460&sr=8-5">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81It%2BVSdKIL._AC_SL1500_.jpg"
            alt="pain medication"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

const mapState = ({ age, painResult, symptom, pregnant }) => {
  return {
    age,
    painResult,
    symptom,
    pregnant,
  };
};

export default connect(mapState)(PainResult);
