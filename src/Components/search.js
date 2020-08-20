import React, { useEffect } from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@material-ui/core";
import { connect } from "react-redux";
import { setDrug, clearAll, searchDrug } from "../Store/actions.js";

const Search = ({ drug, data, dispatch, updateDrug, search }) => {
  useEffect(() => {
    dispatch(clearAll());
  }, []);
  return (
    <div className="search">
      <h1>Search For A Drug</h1>
      <form>
        <input value={drug} onChange={(e) => updateDrug(e)}></input>
        <button onClick={(e) => search(e, drug)}> Search For Drug</button>
      </form>
      {Object.keys(data).length > 0 ? (
        <div>
          <h2>Drug Information</h2>
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Active Ingredient
                  </TableCell>
                  <TableCell align="right">
                    {data.active_ingredient
                      ? data.active_ingredient[0]
                      : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Dosage and Administration
                  </TableCell>
                  <TableCell align="right">
                    {data.dosage_and_administration
                      ? data.dosage_and_administration[0]
                      : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Purpose
                  </TableCell>
                  <TableCell align="right">
                    {data.purpose ? data.purpose[0] : "not vailable"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Indications and Usage
                  </TableCell>
                  <TableCell align="right">
                    {data.indications_and_usage
                      ? data.indications_and_usage[0]
                      : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Warnings
                  </TableCell>
                  <TableCell align="right">
                    {data.warnings ? data.warnings[0] : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Pregnancy or Breast Feeding
                  </TableCell>
                  <TableCell align="right">
                    {data.pregnancy_or_breast_feeding
                      ? data.pregnancy_or_breast_feeding[0]
                      : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Ask A Doctor or Pharmacist
                  </TableCell>
                  <TableCell align="right">
                    {data.ask_doctor ? data.ask_doctor[0] : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Stop Use
                  </TableCell>
                  <TableCell align="right">
                    {data.stop_use ? data.stop_use[0] : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Storage and Handling
                  </TableCell>
                  <TableCell align="right">
                    {data.storage_and_handling
                      ? data.storage_and_handling[0]
                      : "not available"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Package Label
                  </TableCell>
                  <TableCell align="right">
                    {data.package_label_principal_display_panel
                      ? data.package_label_principal_display_panel[0]
                      : "not available"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <h1>No Drug Searched or Drug not Found!</h1>
      )}
    </div>
  );
};

const mapState = ({ drug, data }) => {
  console.log(drug, data);
  return {
    drug,
    data,
  };
};
const mapDispatch = (dispatch) => {
  return {
    dispatch,
    updateDrug: (e) => dispatch(setDrug(e.target.value)),
    search: (e, drug) => dispatch(searchDrug(e, drug))
  };
};

export default connect(mapState, mapDispatch)(Search);
