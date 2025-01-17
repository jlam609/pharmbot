import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form1 from "./forms/form1";
import Form2 from "./forms/form2";
import Form3 from "./forms/form3";
import { clearAll } from "../Store/actions";

const Recommend = ({ dispatch }) => {
  useEffect(() => {
    dispatch(clearAll());
  }, []);
  return (
    <div className="recommend">
      <h2 className="recommendHeader">Get An OTC Drug Recommendation!</h2>
      <div className="recommendBody">
        <img
          src="https://img.favpng.com/25/10/11/giant-panda-bear-baby-pandas-cartoon-drawing-png-favpng-R4XxnKDvf0HrqYPFhQujCVqVu.jpg"
          alt="baby panda"
          height={300}
          width={300}
        />
        <Form1 />
        <Form2 />
        <Form3 />
      </div>
    </div>
  );
};

const mapState = ({ view, symptom }) => {
  return {
    view,
    symptom,
  };
};
const mapDispatch = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapState, mapDispatch)(Recommend);
