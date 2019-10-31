// @flow
import React from "react";

import type { ContainerProps } from "../../types";

import Grid from "../Grid";

import { makeInitialGridState } from "./lib/makeInitialGridState";
import { recalculateGridState } from "./lib/recalculateGridState";
import { useInterval } from "./lib/useInterval";

function Container(props: ContainerProps) {
  const [gridLayoutState, setGridLayoutState] = React.useState(
    makeInitialGridState(props)
  );
  const [delay, setDelay] = React.useState(props.calculationDelay);
  const [isTicking, setIsTicking] = React.useState(true);

  useInterval(
    () => setGridLayoutState(recalculateGridState(gridLayoutState)),
    isTicking ? delay : null
  );

  const handleStartButtonClick = () =>
    setIsTicking(prevIsTicking => !prevIsTicking);

  const handleRangeChange = e => setDelay(e.target.value);

  return (
    <>
      <Grid gridLayoutState={gridLayoutState} />

      <div className="panel">
        <button onClick={handleStartButtonClick}>
          {isTicking ? "STOP" : "START"}
        </button>

        <span>Generation Delay: {delay}</span>

        <input
          type="range"
          value={delay}
          min={300}
          max={2000}
          step={100}
          onChange={handleRangeChange}
        />
      </div>
    </>
  );
}

Container.defaultProps = {
  rows: 50,
  columns: 50,
  calculationDelay: 500
};

export default Container;
