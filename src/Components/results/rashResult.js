import React from "react";
import { connect } from "react-redux";

const RashResult = ({ age, rashResult, symptom }) => {
  return (
    <div>
      <div
        className={age === "2" && symptom === "Rash" ? "resultCard" : "ghost"}
      >
        <h3>Diaper Rash Products</h3>
        <p>
          {" "}
          `Look for a product containing Zinc Oxide for regular Diaper rash. You
          may also want an antifungal to use in conjunction for treatment`{" "}
        </p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Desitin Maximum Strength Cream</h4>
            <p>Usual Dosage: Apply as needed every 1-2 hours</p>
            <a href="https://www.amazon.com/DESITIN-Maximum-Strength-Diaper-Paste/dp/B00E9C1V8A/ref=pd_lpo_121_t_1/136-2243226-4463621?_encoding=UTF8&pd_rd_i=B00E9C1V8A&pd_rd_r=a8b901fe-2335-452d-b3b6-6af4cc490985&pd_rd_w=heptz&pd_rd_wg=tiFMo&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=FYC6EY333TF1YQQSG01Q&psc=1&refRID=FYC6EY333TF1YQQSG01Q">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/61sDemqD3kL._AC_SL1000_.jpg"
            alt="diaper cream"
            height={400}
            width={300}
          />
        </div>
        <br />
        <h3>With</h3>
        <div className="product">
          <div className="productDetails">
            <h4>Lotrisone (Clotrimazole 1% Antifungal Cream) </h4>
            <p>Usual Dosage: Apply twice daily</p>
            <a href="https://www.amazon.com/Clotrimazole-Antifungal-Compare-Lotrimin-Ingredient/dp/B013PGADAW/ref=sr_1_11?dchild=1&keywords=diaper+rash+antifungal&qid=1597843582&s=hpc&sr=1-11">
              Link to buy
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71UDoMokdRL._AC_SL1500_.jpg"
            alt="diaper rash"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age !== "2" && rashResult === "Allergy" && symptom === "Rash"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Rash Products For Allergies</h3>
        <p>
          Look for a product containing diphenhydramine as it's active
          ingredient
        </p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Benadryl Extra-Strength Anti-Itch Cream</h4>
            <p>Usual Dosage: Apply twice daily</p>
            <a href="https://www.amazon.com/Benadryl-Strength-Anti-Itch-Outdoor-Analgesic/dp/B0019RIRJY/ref=sr_1_5?crid=2PZPF1OM37YH6&dchild=1&keywords=benadryl+anti+itch+cream&qid=1597845033&s=hpc&sprefix=benadryl+ant%2Chpc%2C159&sr=1-5">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81cJbe6CIyL._AC_SL1500_.jpg"
            alt="allergy cream"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age !== "2" && rashResult === "Itching/Swelling" && symptom === "Rash"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Rash Products For Itching/Swelling</h3>
        <p>
          Look for a product containing hydrocortisone as it's active ingredient
        </p>
        <p> Here is our recommendation </p>
        <div className="product">
          <div className="productDetails">
            <h4>Hydrocortisone Cream</h4>
            <p>Usual Dosage: Apply twice daily</p>
            <a href="https://www.amazon.com/Cortizone-m%C3%A1xima-No-Model-Moisturizing/dp/B004P51PAU/ref=sr_1_1_sspa?dchild=1&keywords=hydrocortisone&qid=1597845687&s=hpc&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzR0JDRFVCQ0RNNVVaJmVuY3J5cHRlZElkPUEwMjQ3OTgyM1VPU0JTNUMyS0pXSiZlbmNyeXB0ZWRBZElkPUEwMTM2ODMwM1JLUTRVN0xYWTM5SiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81iOzG9OcAL._AC_SL1500_.jpg"
            alt="itch cream"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age !== "2" && rashResult === "JockItch" && symptom === "Rash"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Rash Products For Jock Itch</h3>
        <p>
          `You will probably need a combination of anti-itch, anti-fungal, and
          possibly anti-bacterial products to treat Jock Itch. You may need to
          see a doctor for more options`
        </p>
        <p> Here are our recommendations </p>
        <div className="product">
          <div className="productDetails">
            <h4>Lotrimin Ultra Cream</h4>
            <p>Usual Dosage: Apply twice daily</p>
            <a href="https://www.amazon.com/Lotrimin-Antifungal-Prescription-Butenafine-Hydrochloride/dp/B00O2ZU4HS/ref=sr_1_1_sspa?dchild=1&keywords=jock+itch+products&qid=1597845938&s=hpc&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyM1VYSTlOWFQzOEEyJmVuY3J5cHRlZElkPUEwMzIxNTkxMjhCUlBEVUdTOThBRyZlbmNyeXB0ZWRBZElkPUEwODE1NTQ5MkQxWlZWM0xSQlA2MiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/717fcKw7dtL._AC_SL1500_.jpg"
            alt="itch cream"
            height={400}
            width={300}
          />
        </div>
        <hr />
        <p>With</p>
        <div className="product">
          <div className="productDetails">
            <h4>Hydrocortisone Cream</h4>
            <p>Usual Dosage: Apply twice daily</p>
            <a href="https://www.amazon.com/Cortizone-m%C3%A1xima-No-Model-Moisturizing/dp/B004P51PAU/ref=sr_1_1_sspa?dchild=1&keywords=hydrocortisone&qid=1597845687&s=hpc&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzR0JDRFVCQ0RNNVVaJmVuY3J5cHRlZElkPUEwMjQ3OTgyM1VPU0JTNUMyS0pXSiZlbmNyeXB0ZWRBZElkPUEwMTM2ODMwM1JLUTRVN0xYWTM5SiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81iOzG9OcAL._AC_SL1500_.jpg"
            alt="itch cream"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
      <div
        className={
          age !== "2" && rashResult === "Poison Ivy" && symptom === "Rash"
            ? "resultCard"
            : "ghost"
        }
      >
        <h3>Rash Products For Poison Ivy</h3>
        <p>
          `Poison Ivy can be tough to treat. If the rash persists for longer
          than a week. Seek professional help`
        </p>
        <p> Here are our recommendations </p>
        <div className="product">
          <div className="productDetails">
            <h4>Lotrimin Ultra Cream</h4>
            <p>Usual Dosage: Apply to affected area 3-4 times daily</p>
            <a href="https://www.amazon.com/Ivarest-Anti-Itch-Maximum-Strength-Medicated/dp/B000GCMY9M/ref=sr_1_8?crid=35XU9XPN5B566&dchild=1&keywords=poison+ivy+treatment&qid=1597887126&sprefix=poison%2Camazonfresh%2C160&sr=8-8">
              Link to buy on Amazon
            </a>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71Hw1SA81CL._AC_SL1500_.jpg"
            alt="itch cream"
            height={400}
            width={300}
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

const mapState = ({ age, rashResult, symptom }) => {
  return {
    age,
    rashResult,
    symptom,
  };
};

export default connect(mapState)(RashResult);
