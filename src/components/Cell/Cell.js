// @flow
import React from "react";

import "./Cell.css";

type Props = {
  isActive: boolean
};

function Cell({ isActive }: Props) {
  return (
    <div
      className="cell"
      style={{ backgroundColor: isActive ? "black" : "white" }}
    />
  );
}

export default Cell;
