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
import { setSymptom, setView } from "../../Store/actions";

const Form1 = ({ dispatch, symptom, view }) => {
  return (
      <div className={view === "form1" ? "recommendForm" : "ghost"}>
        <h4>Hi! What do you need help with today?</h4>
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Symptoms</FormLabel>
          <RadioGroup
            aria-label="Symptoms"
            value={symptom}
            onChange={(e) => dispatch(setSymptom(e.target.value))}
          >
            <FormControlLabel value="Pain" control={<Radio />} label="Pain" />
            <FormControlLabel
              value="Constipation"
              control={<Radio />}
              label="Constipation"
            />
            <FormControlLabel
              value="Cold/Flu"
              control={<Radio />}
              label="Cold/Flu"
            />
            <FormControlLabel
              value="Motion Sickness"
              control={<Radio />}
              label="Motion Sickness"
            />
            <FormControlLabel value="Rash" control={<Radio />} label="Rash" />
            <FormControlLabel
              value="Heartburn"
              control={<Radio />}
              label="Heartburn"
            />
            <FormControlLabel
              value="Migraine"
              control={<Radio />}
              label="Migraine"
            />
            <FormControlLabel
              value="Insomnia"
              control={<Radio />}
              label="Insomnia"
            />
          </RadioGroup>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(setView("form2"));
            }}
            disabled={!symptom}
          >
            Submit Choice
          </Button>
        </FormControl>
      </div>
  );
};

const mapState = ({ view, symptom }) => {
    console.log(symptom)
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
export default connect(mapState, mapDispatch)(Form1);
