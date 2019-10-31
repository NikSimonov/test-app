import { countActiveCells } from "../lib/countActiveCells";
import { makeInitialGridState } from "../lib/makeInitialGridState";
import { getAdjacentCells } from "../lib/getAdjacentCells";
import { recalculateGridState } from "../lib/recalculateGridState";

const mockGridStateSquare = [
  [false, false, false, false],
  [false, true, true, false],
  [false, true, true, false],
  [false, false, false, false]
];

const mockGridStateLineInitial = [
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false]
];

const mockGridStateLineAfter = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
];

const adjacentCells = getAdjacentCells({
  row: 0,
  column: 0,
  maxRow: 4,
  maxColumn: 4
});

describe("makeInitialGridState", () => {
  test("generates 5x5 grid", () => {
    const grid = makeInitialGridState({ rows: 5, columns: 5 })();

    expect(grid.length).toBe(5);

    grid.forEach(row => {
      expect(row.length).toBe(5);
    });
  });
});

describe("getAdjacentCells", () => {
  test("returns 3 adjacent cells for first cell in first row", () => {
    expect(adjacentCells.length).toBe(3);
  });

  test("returns no cells with negative indexes", () => {
    adjacentCells.forEach(cell =>
      cell.forEach(num => {
        expect(num).toBeGreaterThanOrEqual(0);
      })
    );
  });
});

describe("countActiveCells", () => {
  test("returns correct cell number", () => {
    const numOfActiveCells = countActiveCells(
      mockGridStateSquare,
      adjacentCells
    );

    expect(numOfActiveCells).toBe(1);
  });
});

describe("recalculateGridState", () => {
  test("returns correct state", () => {
    const state = recalculateGridState(mockGridStateLineInitial);

    expect(state).toEqual(mockGridStateLineAfter);

    const newState = recalculateGridState(state);

    expect(newState).toEqual(mockGridStateLineInitial);
  });
});
