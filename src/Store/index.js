import { createStore, applyMiddleware } from "redux";
import TYPES from "./types";
import thunks from "redux-thunk";

const initialState = {
  age: 0,
  view: "form1",
  pregnant: "No",
  symptom: "",
  data: {},
  drug: "",
  rashResult: "",
  gender: "",
  painResult: "",
  covidView: "USSTATES",
  covidData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_AGE:
      return {
        ...state,
        age: action.age,
      };
    case TYPES.SET_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case TYPES.SET_PREGNANT:
      return {
        ...state,
        pregnant: action.pregnant,
      };
    case TYPES.SET_SYMPTOM:
      return {
        ...state,
        symptom: action.symptom,
      };
    case TYPES.SET_DATA:
      return {
        ...state,
        data: { ...action.data },
      };
    case TYPES.SET_DRUG:
      return {
        ...state,
        drug: action.drug,
      };
    case TYPES.CLEAR_ALL:
      return {
        ...initialState,
      };
    case TYPES.SET_RASH_RESULT:
      return {
        ...state,
        rashResult: action.rashResult,
      };
    case TYPES.SET_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    case TYPES.SET_PAIN_RESULT:
      return {
        ...state,
        painResult:action.painResult
      }
    case TYPES.SET_COVID_VIEW:
      return {
        ...state,
        covidView: action.covidView
      }
    case TYPES.SET_COVID_DATA:
      return {
        ...state,
        covidData: action.covidData
      }
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunks));

export default store;
