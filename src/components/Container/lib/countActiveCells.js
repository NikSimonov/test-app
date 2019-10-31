// @flow
import type { NestedArray } from "../../../types";

export function countActiveCells(
  gridState: NestedArray<boolean>,
  adjacentCells: NestedArray<number>
): number {
  return adjacentCells.reduce((acc, [row, column]) => {
    if (acc > 3) {
      return acc;
    }

    return gridState[row][column] ? acc + 1 : acc;
  }, 0);
}
