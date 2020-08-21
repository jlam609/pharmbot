import React from "react";
import { connect } from "react-redux";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { setCovidView } from "../../Store/actions";

const CovidNav = ({ dispatch, covidView }) => {
  return (
    <div className="CovidNav">
      <Paper square>
        <img
          src={
            "https://img.etimg.com/thumb/width-640,height-480,imgsize-110849,resizemode-1,msid-74870343/markets/stocks/news/economic-life-after-covid-19-lessons-from-the-black-death/virus-shutter-1200.jpg"
          }
          alt="covid"
          height={150}
          width={150}
        />
        <h4>Covid-19 News Update</h4>
        <br />
        <hr />
        <Tabs
          value={covidView}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, value) => {
              dispatch(setCovidView(value))
            }}
          orientation="vertical"
          variant="scrollable"
        >
          <Tab label={`US States`} value="USSTATES" />
          <Tab label={`Treatment`} value="Treatment" />
        </Tabs>
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

export default connect(mapState, mapDispatch)(CovidNav);
