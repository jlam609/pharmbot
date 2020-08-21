import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
} from "@material-ui/core";
import { setCovidData, setCovidView } from "../../Store/actions";

const CovidTable = ({ dispatch, covidView, covidData, handleSort }) => {
  const history = useHistory();
  const headCells = [
    "Tests Positive",
    "Tests Negative",
    "Total Increase",
    "On Ventilators",
    "Death",
    "Recovered",
    "Hospitalized",
    "Admission ^",
  ];
  return (
    <div className={covidView === "USSTATES" ? "covidTable" : "ghost"}>
      {covidData && covidData.length ? (
        <TableContainer component={Paper} className="adminTableChild">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>State</TableCell>
                {headCells.map((headCell, idx) => (
                  <TableCell key={headCell} align={"right"} value={headCell}>
                    <TableSortLabel
                      direction={"asc"}
                      onClick={(e) =>
                        handleSort(e, headCell, covidData, history)
                      }
                    >
                      {headCell}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {covidData.length ? (
                covidData.map((row) => (
                  <TableRow key={row.state}>
                    <TableCell component="th" scope="row">
                      {row.state}
                    </TableCell>
                    <TableCell align="right">{row.positive}</TableCell>
                    <TableCell align="right">{row.negative}</TableCell>
                    <TableCell align="right">
                      {row.totalTestResultsIncrease}
                    </TableCell>
                    <TableCell align="right">
                      {row.onVentilatorCurrently || 0}
                    </TableCell>
                    <TableCell align="right">{row.death}</TableCell>
                    <TableCell align="right">{row.recovered || 0}</TableCell>
                    <TableCell align="right">
                      {row.hospitalizedCurrently || 0}
                    </TableCell>
                    <TableCell align="right">
                      {row.hospitalizedIncrease}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell>No data</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapState = ({ covidView, covidData }) => {
  return {
    covidView,
    covidData,
  };
};

const mapDispatch = (dispatch) => {
  const handleSort = async (e, cell, data, history) => {
    if (cell === "Tests Positive") {
      data = data.sort((a, b) => b.positive - a.positive);
      await dispatch(setCovidData(data));
    } else if (cell === "Tests Negative") {
      data = data.sort((a, b) => b.negative - a.negative);
      await dispatch(setCovidData(data));
    } else if (cell === "Total Increase") {
      data = data.sort(
        (a, b) => b.totalTestResultsIncrease - a.totalTestResultsIncrease
      );
      await dispatch(setCovidData(data));
    } else if (cell === "On Ventilators") {
      data = data.sort(
        (a, b) => b.onVentilatorCurrently - a.onVentilatorCurrently
      );
      await dispatch(setCovidData(data));
    } else if (cell === "Admission ^") {
      data = data.sort(
        (a, b) => b.hospitalizedIncrease - a.hospitalizedIncrease
      );
      await dispatch(setCovidData(data));
    } else if (cell === "Death") {
      data = data.sort((a, b) => b.death - a.death);
      await dispatch(setCovidData(data));
    } else if (cell === "Recovered") {
      data = data.sort((a, b) => b.recovered - a.recovered);
      await dispatch(setCovidData(data));
    } else if (cell === "Hospitalized") {
      data = data.sort(
        (a, b) => b.hospitalizedCurrently - a.hospitalizedCurrently
      );
      await dispatch(setCovidData(data));
    }
    dispatch(setCovidView(""));
    dispatch(setCovidView("USSTATES"));
  };
  return {
    dispatch,
    handleSort,
  };
};

export default connect(mapState, mapDispatch)(CovidTable);
