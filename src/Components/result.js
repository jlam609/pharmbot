import React from "react";
import ColdResult from "./results/coldResult";
import ConstipationResult from "./results/constipationResult";
import InsomniaResult from "./results/insomniaResult";
import MigraineResult from "./results/migraineResult";
import RashResult from "./results/rashResult";
import HeartburnResult from "./results/heartburn";
import PainResult from "./results/painResult";
import MotionResult from "./results/motionResult";

const Result = () => {
  return (
    <>
      <ColdResult />
      <ConstipationResult />
      <InsomniaResult />
      <MigraineResult />
      <RashResult />
      <HeartburnResult />
      <PainResult />
      <MotionResult />
    </>
  );
};

export default Result;
