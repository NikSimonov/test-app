// @flow
import type { ContainerProps } from "../../../types";

export function makeInitialGridState({ rows, columns }: ContainerProps) {
  return () =>
    Array.from({ length: rows }).map<Array<boolean>>(() =>
      Array.from({ length: columns }).map(() => Math.random() >= 0.8)
    );
}
