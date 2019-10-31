export type NestedArray<T> = Array<Array<T>>;

export type CellProps = { isActive: boolean, id: Array<number> };

export type ContainerProps = {
  rows: number,
  columns: number,
  calculationDelay: number
};
