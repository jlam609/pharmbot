import { createStore, applyMiddleware } from "redux";
import TYPES from "./types";
import thunks from "redux-thunk";

const initialState = {
  age: 0,
  view: "form1",
  pregnant: "",
  symptom: "",
  data: {},
  drug: "",
  rashResult: "",
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
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunks));

export default store;
