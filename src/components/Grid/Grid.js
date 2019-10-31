// @flow
import React from "react";
import type { Node } from "react";
import type { CellProps, NestedArray } from "../../types";

import Cell from "../Cell";

type GridProps = {
  gridLayoutState: NestedArray<boolean>
};

function Grid({ gridLayoutState }: GridProps) {
  return gridLayoutState.map<Node>((row: Array<CellProps>, i) => (
    <div className="row" key={i}>
      {row.map<Node>((isActive, j) => (
        <Cell key={`${i}.${j}`} isActive={isActive} />
      ))}
    </div>
  ));
}

export default Grid;
