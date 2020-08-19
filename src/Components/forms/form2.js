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
import {useHistory} from "react-router-dom"
import { setPregnant, setView, setAge } from "../../Store/actions";

const Form2 = ({ dispatch, pregnant, view, age, symptom, handleSubmit}) => {
    const history = useHistory()
  return (
    <div className={view === "form2" ? "recommendForm" : "ghost"}>
      <h4>Additional Information Needed</h4>
      <FormControl component="fieldset">
        <FormLabel component="legend">Are You Pregnant?</FormLabel>
        <RadioGroup
          value={pregnant}
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
          <FormControlLabel value="2" control={<Radio />} label="2 and Under" />
          <FormControlLabel value="5" control={<Radio />} label="5-12" />
          <FormControlLabel value="13" control={<Radio />} label="13-17" />
          <FormControlLabel value="18" control={<Radio />} label="Over 18" />
        </RadioGroup>
      </FormControl>
      <Button
        onClick={(e) => handleSubmit(e, symptom, history)}
        disabled={!pregnant || !age}
      >
        Submit Answers
      </Button>
    </div>
  );
};

const mapState = ({ view, pregnant, age, symptom }) => {
  return {
    view,
    pregnant,
    age,
    symptom,
  };
};
const mapDispatch = (dispatch) => {
   const handleSubmit = (e, symptom, history) => {
    e.preventDefault()
    if (symptom === 'Rash'){
        dispatch(setView('form3'))
    }
    else {
        dispatch(setView('form1'))
        history.push(`/result`)
    }
   }
  return {
    dispatch,
    handleSubmit
  };
};
export default connect(mapState, mapDispatch)(Form2);
