import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";
import { getCellState } from "./getCellState";
import { getNewCellState } from "./getNewCellState";

/**
 * получить новое состояние
 * @param {number[][]} field  - состояние поля
 * @return number[][] - новое состояние поля
 */
// export function getNextState(field: number[][]): number[][] {
//   return field.map((row, rowIndex) =>
//     row.map((cell, cellIndex) => {
//       const an = getNumOfAliveNeighbours(cellIndex, rowIndex, field);
//       const currentState = getCellState(field, cellIndex, rowIndex);
//       const newState = getNewCellState(currentState, an);
//       return newState;
//     })
//   );
// }
export function getNextState(field: number[][]): number[][] {
  return field.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const aliveNeighbour = getNumOfAliveNeighbours(
        cellIndex,
        rowIndex,
        field
      );
      const currentState = getCellState(field, cellIndex, rowIndex);
      const newState = getNewCellState(currentState, aliveNeighbour);
      return newState;
    })
  );
}
