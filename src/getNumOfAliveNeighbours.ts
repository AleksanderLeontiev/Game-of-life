import { getCellState } from "./getCellState";
/**
 * узнать сколько живых соседей вокруг клетки
 * @param column {number} - номер колонки
 * @param row {number} - номер строки
 * @param field {number[][]} - состояние поля
 * @return number - число живых соседей
 */

export function getNumOfAliveNeighbours(
  column: number,
  row: number,
  field: number[][]
): number {
  let neighbours = 0;

  for (let i = column - 1; i <= column + 1; i++) {
    neighbours += Number(getCellState(field, i, row - 1));
    neighbours += Number(getCellState(field, i, row + 1));
  }
  neighbours += Number(getCellState(field, column - 1, row));
  neighbours += Number(getCellState(field, column + 1, row));

  return neighbours;
}
