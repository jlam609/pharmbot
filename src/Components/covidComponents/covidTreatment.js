import React from "react";
import { connect } from "react-redux";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { setCovidView } from "../../Store/actions";

const CovidTreatment = ({ dispatch, covidView }) => {
  return (
    <div className={covidView === "Treatment" ? "covidTable" : "ghost"}>
      <Paper square>
        <h2>Current First Line Covid-19 Treatments</h2>
        <br />
        <div className="product">
          <div className="productDetails">
            <h4> Remdesivir Injection</h4>
            <p>
              Remdesivir is an antiviral that is given by intravenous (IV)
              infusion in the hospital. This is a brand-new drug that has not
              been approved by the FDA for use on the market yet, and is being
              tested in carefully controlled environments. It was previously
              shown to have some effect against SARS, MERS, and Ebola in cell
              and animal models. In a recent in vitro study (studies done in a
              petri dish or test tube rather than in animals or humans),
              remdesivir prevented human cells from being infected with
              SARS-CoV-2 (the virus that causes COVID-19). Early results from a
              large study of 1,063 patients showed that hospitalized patients
              who got remdesivir recovered faster than those who got a placebo
              (11 days vs. 15 days, respectively). The death rate in the
              remdesivir group (7%) was also lower than that of the placebo
              group (12%), though this was not statistically significant
              (meaning this might’ve happened by chance). Patients who needed
              oxygen saw the most benefit. A press release later reported that a
              separate study saw similar death rates, but this study was not as
              rigorous. While these early findings support the use of remdesivir
              for hospitalized patients with COVID-19, the researchers concluded
              that treatment with remdesivir alone is likely not enough. This is
              because those who got the medication still experienced a high
              death rate. Nonetheless, based on positive reports from the study
              above, Gilead’s announcement of early results from a phase 3 trial
              in hospitalized patients with severe symptoms, and a small study
              in patients who received remdesivir through a compassionate use
              program, the FDA issued an emergency use authorization (EUA) for
              remdesivir on May 1, 2020. The EUA does not mean that the FDA has
              approved remdesivir for the treatment of COVID-19. Rather, the
              intent of the EUA is to make it easier for doctors to get
              remdesivir for hospitalized patients with severe COVID-19
              symptoms. These are patients who require mechanical ventilation or
              extra oxygen. More information about the remdesivir EUA can be
              found here. On June 1, 2020, Gilead announced more results from
              their phase 3 study — this time they looked at hospitalized
              patients with moderate symptoms of COVID-19. People who got
              remdesivir for 5 days were 65% more likely to improve on day 11
              compared to those who did not get the treatment. Some people got
              remdesivir for 10 days, and they also seemed more likely to
              improve compared to those who didn’t get any. The difference was
              not statistically significant, though. Until more data is shared,
              it’s unclear why remdesivir appears to work better when given for
              5 days instead of 10 days. Not all remdesivir studies have been
              positive. Take a study of 236 patients with COVID-19 in China, for
              example. (This was a randomized, double-blinded study, which is
              the gold standard for clinical trials.) In one specific analysis,
              a group of patients in the study who received remdesivir within 10
              days of showing symptoms recovered slightly more quickly than
              those who received a placebo. However, this difference was not
              statistically significant, meaning it could have been due to
              chance. When looking at all patients in the study (regardless of
              when they received remdesivir), there was no difference in time to
              improvement compared to placebo. The researchers state that larger
              studies are needed to confirm the results.
            </p>
          </div>
          <img
            src="https://journosdiary.files.wordpress.com/2020/06/0_img-20200623-wa00073074697144445225336.jpg"
            alt="cold medicine"
            height={500}
            width={500}
          />
        </div>
        <hr />
        <div className="product">
          <div className="productDetails">
            <h4> Dexamethasone Tablet</h4>
            <p>
              Dexamethasone is a common corticosteroid (steroid) medication that
              has been used for many years to treat various health conditions,
              such as autoimmune conditions and allergic reactions. RECOVERY, a
              randomized clinical trial in the UK, is studying many medications,
              including dexamethasone, to see if any are effective against
              COVID-19. Researchers found that there was a lower death rate at
              day 28 in the 2,104 hospitalized patients with COVID-19 who got a
              low, daily dose of dexamethasone (either by mouth or IV injection)
              compared to the 4,321 patients who did not get it (23% versus 26%,
              respectively). This difference was significant. The medication
              seemed to be most helpful for patients who were on a ventilator or
              needed extra oxygen. There was no benefit for those with less
              severe symptoms.
            </p>
          </div>
          <img
            src="https://static.euronews.com/articles/stories/04/75/51/48/1000x563_cmsv2_17c2d109-0b9a-5a51-90f7-0f2e36b6f104-4755148.jpg"
            alt="cold medicine"
            height={500}
            width={500}
          />
        </div>
      </Paper>
    </div>
  );
};

const mapState = ({ covidView }) => {
  return {
    covidView,
  };
};

const mapDispatch = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapState, mapDispatch)(CovidTreatment);
