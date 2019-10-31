// @flow
import type { NestedArray } from "../../../types";

import { getAdjacentCells } from "./getAdjacentCells";
import { countActiveCells } from "./countActiveCells";
import { isCellActive } from "./isCellActive";

export function recalculateGridState(gridState: NestedArray<boolean>) {
  return gridState.map((row, i) =>
    row.map((isActive, j) => {
      const adjacentCells = getAdjacentCells({
        row: i,
        column: j,
        maxRow: gridState.length,
        maxColumn: row.length
      });

      const numOfActiveCells = countActiveCells(gridState, adjacentCells);

      return isCellActive(isActive, numOfActiveCells);
    })
  );
}
