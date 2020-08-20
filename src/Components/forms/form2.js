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
import { setPregnant, setView, setAge, setGender } from "../../Store/actions";

const Form2 = ({
  dispatch,
  pregnant,
  view,
  age,
  symptom,
  handleSubmit,
  gender,
}) => {
  const history = useHistory();
  return (
    <div className={view === "form2" ? "recommendForm" : "ghost"}>
      <h4>Additional Information Needed</h4>
      <FormControl component="fieldset">
        <FormLabel component="legend">What is your gender?</FormLabel>
        <RadioGroup
          value={gender}
          onChange={(e) => dispatch(setGender(e.target.value))}
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
        <br />
        <hr />
        <FormLabel component="legend">Are You Pregnant?</FormLabel>
        <RadioGroup
          value={gender === "Male" ? "No" : pregnant}
          onChange={(e) => dispatch(setPregnant(e.target.value))}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
        <br />
        <hr />
        <FormLabel component="legend">How Old Are You?</FormLabel>
        <RadioGroup
          value={age}
          onChange={(e) => dispatch(setAge(e.target.value))}
        >
          <FormControlLabel value="2" control={<Radio />} label="2 - 4" />
          <FormControlLabel value="5" control={<Radio />} label="5-10" />
          <FormControlLabel value="18" control={<Radio />} label="Over 10" />
        </RadioGroup>
      </FormControl>
      <Button
        onClick={(e) => handleSubmit(e, symptom, history, age)}
        disabled={!pregnant || !age || !gender}
      >
        Submit Answers
      </Button>
    </div>
  );
};

const mapState = ({ view, pregnant, age, symptom, gender }) => {
  return {
    view,
    pregnant,
    age,
    symptom,
    gender,
  };
};
const mapDispatch = (dispatch) => {
  const handleSubmit = (e, symptom, history, age) => {
    e.preventDefault();
    if (
      (symptom === "Rash" && age !== "2") ||
      (symptom === "Pain" && age !== "2")
    ) {
      dispatch(setView("form3"));
    } else {
      history.push(`/result`);
      dispatch(setView("form1"));
    }
  };
  return {
    dispatch,
    handleSubmit,
  };
};
export default connect(mapState, mapDispatch)(Form2);
