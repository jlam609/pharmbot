import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setCovidData } from "../Store/actions";
import CovidNav from "./covidComponents/covidNav";
import CovidTable from "./covidComponents/covidTable";
import CovidTreatment from "./covidComponents/covidTreatment";

const Covid = ({ dispatch, covidData }) => {
  useEffect(() => {
    const getData = async () => {
      const covidDataSource = (await axios.get("/covidData")).data;
      return dispatch(setCovidData(covidDataSource));
    };
    getData();
  }, []);
  return (
    <div className="CovidPage">
      <CovidNav />
      <CovidTable />
      <CovidTreatment />
    </div>
  );
};

const mapState = ({ covidData }) => {
  return {
    covidData,
  };
};
const mapDispatch = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapState, mapDispatch)(Covid);
