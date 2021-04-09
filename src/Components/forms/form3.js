import React, { useState } from "react";
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Radio,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setView, setRashResult, setPainResult } from "../../Store/actions";

const Form3 = ({ dispatch, view, rashResult, gender, symptom, painResult }) => {
  const history = useHistory();
  return (
    <div className={view === "form3" ? "recommendForm" : "ghost"}>
      <h4>Select the type that is closest to your need?</h4>
      <br />
      <div className={symptom === "Rash" ? "" : "ghost"}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Rash Type</FormLabel>
          <hr/>
          <RadioGroup
            value={rashResult}
            onChange={(e) => dispatch(setRashResult(e.target.value))}
          >
            <FormControlLabel
              value="Allergy"
              control={<Radio />}
              label="Allergy"
            />
            <div className={gender === "Male" ? "" : "ghost"}>
              <FormControlLabel
                value="JockItch"
                control={<Radio />}
                label="JockItch"
              />
            </div>
            <FormControlLabel
              value="Itching/Swelling"
              control={<Radio />}
              label="Itching/Swelling"
            />
            <FormControlLabel
              value="Poison Ivy"
              control={<Radio />}
              label="Poison Ivy"
            />
          </RadioGroup>
          <Button
            onClick={(e) => history.push("/result")}
            disabled={!rashResult}
          >
            Submit Choice
          </Button>
        </FormControl>
      </div>
      <div className={symptom === "Pain" ? "" : "ghost"}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Pain Type</FormLabel>
          <hr/>
          <RadioGroup
            value={painResult}
            onChange={(e) => dispatch(setPainResult(e.target.value))}
          >
            <FormControlLabel
              value="Nerve Pain"
              control={<Radio />}
              label="Nerve Pain"
            />
            <FormControlLabel
              value="Muscle Pain"
              control={<Radio />}
              label="Muscle Pain"
            />
            <FormControlLabel
              value="Chronic/Acute Pain"
              control={<Radio />}
              label="Chronic/Acute Pain"
            />
          </RadioGroup>
          <Button
            onClick={(e) => history.push("/result")}
            disabled={!painResult}
          >
            Submit Choice
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

const mapState = ({ view, rashResult, gender, symptom, painResult }) => {
  return {
    view,
    rashResult,
    gender,
    symptom,
    painResult
  };
};
const mapDispatch = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapState, mapDispatch)(Form3);
