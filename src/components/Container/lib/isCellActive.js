// @flow
export function isCellActive(
  currentCellStatus: boolean,
  numOfActiveCells: number
): boolean {
  const willActivate = !currentCellStatus && numOfActiveCells === 3;
  const staysActive =
    currentCellStatus && (numOfActiveCells === 3 || numOfActiveCells === 2);

  if (willActivate || staysActive) {
    return true;
  }

  return false;
}
