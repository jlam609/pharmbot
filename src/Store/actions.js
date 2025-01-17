import TYPES from "./types";
import axios from "axios";

const setView = (view) => ({
  type: TYPES.SET_VIEW,
  view,
});

const setAge = (age) => ({
  type: TYPES.SET_AGE,
  age,
});

const setSymptom = (symptom) => ({
  type: TYPES.SET_SYMPTOM,
  symptom,
});

const setPregnant = (pregnant) => ({
  type: TYPES.SET_PREGNANT,
  pregnant,
});
const setData = (data) => ({
  type: TYPES.SET_DATA,
  data,
});
const setDrug = (drug) => ({
  type: TYPES.SET_DRUG,
  drug,
});
const clearAll = () => ({
  type: TYPES.CLEAR_ALL,
});
const searchDrug = (e, drug) => {
  return async (dispatch) => {
    e.preventDefault();
    try {
      const res = (
        await axios({
          url: `https://api.fda.gov/drug/label.json?search=active_ingredient:${drug}&limit=1`,
          method: "get",
        })
      ).data.results;
      dispatch(setData(...res));
    } catch (e) {
      dispatch(setData(""));
    }
  };
};
const setGender = (gender) => ({
  type: TYPES.SET_GENDER,
  gender,
});
const setRashResult = (rashResult) => ({
  type: TYPES.SET_RASH_RESULT,
  rashResult,
});
const setPainResult = (painResult) => ({
    type:TYPES.SET_PAIN_RESULT,
    painResult
})
const setCovidView = (covidView) => ({
    type:TYPES.SET_COVID_VIEW,
    covidView
})
const setCovidData = (covidData) => ({
    type:TYPES.SET_COVID_DATA,
    covidData,
})
export {
  setView,
  setAge,
  setSymptom,
  setPregnant,
  setData,
  setDrug,
  clearAll,
  searchDrug,
  setRashResult,
  setGender,
  setPainResult,
  setCovidView,
  setCovidData,
};
