// @flow
import type { NestedArray } from "../../../types";

import { inRange } from "./inRange";

const OFFSETS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];

export function getAdjacentCells({
  row,
  column,
  maxRow,
  maxColumn
}: {
  row: number,
  column: number,
  maxRow: number,
  maxColumn: number
}) {
  return OFFSETS.reduce<NestedArray<number>>(
    (acc, [rowOffset, columnOffset]) => {
      const newRowValue = row + rowOffset;
      const newColumnValue = column + columnOffset;

      if (
        !inRange(newRowValue, maxRow, 0) ||
        !inRange(newColumnValue, maxColumn, 0)
      ) {
        return acc;
      }

      acc.push([newRowValue, newColumnValue]);

      return acc;
    },
    []
  );
}
